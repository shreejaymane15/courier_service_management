using CSM.Models;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;





namespace CSM.Controllers
{
    [RoutePrefix("api/Customer")]
    public class CustomerController : ApiController
    {
        CSMEntities1 dbt = new CSMEntities1();
        JWTTokenizer tokenizer = new JWTTokenizer();



        [HttpPut]
        [Route("GetMyOrders")]
        public async Task<IHttpActionResult> GetOrders([FromBody] CheckToken token)
        {
            try
            {
                var user = await Task.Run(() => dbt.User_Info
                    .Where(u => u.user_Id == token.user_id && u.token == token.token)
                    .FirstOrDefault());

                if (user == null)
                    return Ok("INVALID");

                string result = tokenizer.validateToken(token.token);

                if (result == "VALID")
                {
                    var orders = await Task.Run(() => dbt.Orders.ToList()
                                           .Where(Order => Order.customer_id == token.user_id)
                                           .ToList());
                    return Ok(orders);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex + " An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }


        [HttpPut]
        [Route("GetMyOrders/{id}")]
        public async Task<IHttpActionResult> GetMyOrders(string id, [FromBody] CheckToken token)
        {
            try
            {

                var user = await Task.Run(() => dbt.User_Info.ToList()
                                     .Where(u => u.user_Id == token.user_id && u.token == token.token)
                                     .ToList());

                if (user == null)
                    return Ok("INVALID");


                string result = tokenizer.validateToken(token.token);

                if (result == "VALID")
                {
                   

                    var orders = (from Order in dbt.Orders.ToList()
                                  where Order.status == id && Order.customer_id == token.user_id
                                  select Order).ToList();

                    return Ok(orders);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine(ex + "An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }


        [HttpPost]
        [Route("GetStatus")]
        public async Task<IHttpActionResult> GetStatus([FromBody] CheckToken token)
        {
            try
            {
                var user = await Task.Run(() => dbt.User_Info.ToList()
                                         .Where(u => u.user_Id == token.user_id && u.token == token.token)
                                         .FirstOrDefault());

                if (user == null)
                    return Ok("INVALID");

                string result = tokenizer.validateToken(token.token);

                if (result == "VALID")
                {
                    var status = await Task.Run(() => dbt.Orders.Select(d => d.status).Distinct().ToList());
                    return Ok(status);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex + "An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }

        [HttpPost]
        [Route("GetMyProfile")]
        public async Task<IHttpActionResult> GetMyProfile([FromBody] CheckToken token)
        {
            try
            {
                var user = await Task.Run(() => dbt.User_Info.ToList()
                     .Where(u => u.user_Id == token.user_id && u.token == token.token)
                     .FirstOrDefault());

                if (user == null)
                    return Ok("INVALID");


                string result = tokenizer.validateToken(token.token);

                if (result == "VALID")
                {
                    return Ok(user);
                }
                return Ok(result);

            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine(ex + "An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }

        [HttpPut]
        [Route("SaveMyProfile/{id}")]
        public async Task<IHttpActionResult> SaveMyProfile(int id, [FromBody] EmployeeData user)
        {
            try
            {
                var loginuser = await Task.Run(() => dbt.User_Info.ToList()
                     .Where(u => u.user_Id == user.data.user_id && u.token == user.data.token)
                     .FirstOrDefault());

                if (loginuser == null)
                    return Ok("INVALID");


                string result = tokenizer.validateToken(user.data.token);

                if (result == "VALID")
                {
                    var employeeToUpdate = await Task.Run(() => dbt.User_Info.ToList()
                                                    .Where(User_Info => User_Info.user_Id == id)
                                                    .FirstOrDefault());
                    employeeToUpdate.first_name = user.user.first_name;
                    employeeToUpdate.last_name = user.user.last_name;
                    employeeToUpdate.address = user.user.address;
                    employeeToUpdate.mobile = user.user.mobile;
                    SHA512Encryption sha512 = new SHA512Encryption();
                    string encrypt = sha512.Encode(user.user.password);
                    user.user.password = encrypt;
                    employeeToUpdate.password = user.user.password;
                    int save = dbt.SaveChanges();
                    return Ok(save);
                }

                return Ok(result);

            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine(ex + "An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }

        [HttpPost]
        [Route("GetPackageType")]
        public async Task<IHttpActionResult> GetPackageType([FromBody] CheckToken data)
        {
            try
            {
                var user = await Task.Run(() => dbt.User_Info.ToList()
                        .Where(u => u.user_Id == data.user_id && u.token == data.token)
                        .FirstOrDefault());

                if (user == null)
                    return Ok("INVALID");

                string result = tokenizer.validateToken(data.token);
                if (result == "VALID")
                {
                    var type = await Task.Run(() => dbt.Package_Price.ToList()
                    .Select(Package => Package)
                    .ToList());
                    return Ok(type);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine(ex + "An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }

        [HttpPost]

        [Route("AddOrder")]
        public async Task<IHttpActionResult> AddOrder([FromBody] EmployeeData data)
        {
            try 
            {
                var user = await Task.Run(() => dbt.User_Info.ToList()
                        .Where(u => u.user_Id == data.data.user_id && u.token == data.data.token)
                        .FirstOrDefault());

                if (user == null)
                    return Ok("INVALID");

                string result = tokenizer.validateToken(data.data.token);
                if (result == "VALID")
                {
                    data.order.customer_id = data.data.user_id;
                    data.order.status = "In Transit";
                    data.order.personnel_id = (from Delivery in dbt.Delivery_Personnel.ToList()
                                                where Delivery.location.ToUpper() == data.order.receiver_address.ToUpper()
                                                select Delivery.personnel_id).FirstOrDefault();


                    dbt.Orders.Add(data.order);
                    int save = dbt.SaveChanges();
                    return Ok(save);
                }

                return Ok(result);
            }
            catch (Exception ex)
                {
                    // Log the exception for debugging purposes
                    Console.WriteLine(ex + "An error occurred while processing the request.");
                    return InternalServerError(ex);
                }
        }

        [HttpPost]
        [Route("AddComplaint")]
        public async Task<IHttpActionResult> AddComplaint([FromBody] ComplaintData data)
        {
            try
            {
                var user = await Task.Run(() => dbt.User_Info.ToList()
                                     .Where(u => u.user_Id == data.data.user_id && u.token == data.data.token)
                                     .FirstOrDefault());

                if (user == null)
                    return Ok("INVALID");

                string result = tokenizer.validateToken(data.data.token);
                if (result == "VALID")
                {
                    Complaint newComplaint = new Complaint();
                    newComplaint.complaint1 = data.complaint;
                    newComplaint.placed_date = DateTime.Now;
                    newComplaint.customer_id = data.data.user_id;
                    newComplaint.order_id = data.order_id;
                    newComplaint.role_id = 4;
                    newComplaint.status = "IN PROCESS";

                    dbt.Complaints.Add(newComplaint);
                    int save = dbt.SaveChanges();
                    return Ok(save);
                }

                  return Ok(result);
                }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpGet]
        [Route("GetOrderId/{id}")]
        public async Task<IHttpActionResult> GetOrdeId(int id)
        {
            try
            {
                var OrderId = await Task.Run(() => dbt.Orders.ToList()
                    .Where(Order => Order.customer_id == id)
                    .Select(Order => Order.order_id).ToList());
                return Ok(OrderId);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine(ex + "An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }


        [HttpPut]
        [Route("GetMyComplaints")]
        public async Task<IHttpActionResult> GetMyComplaints([FromBody] CheckToken token)
        {
            try
            {
                var user = await Task.Run(() => dbt.User_Info
                    .Where(u => u.user_Id == token.user_id && u.token == token.token)
                    .FirstOrDefault());

                if (user == null)
                    return Ok("INVALID");

                string result = tokenizer.validateToken(token.token);

                if (result == "VALID")
                {
                    var complaints = await Task.Run(() => dbt.Complaints.ToList()
                                           .Where(Complaint => Complaint.customer_id == token.user_id && Complaint.role_id == 4)
                                           .ToList());
                    return Ok(complaints);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex + " An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }

        [HttpPost]
        [Route("GetComplaintStatus")]
        public async Task<IHttpActionResult> GetComplaintStatus([FromBody] CheckToken token)
        {
            try
            {
                var user = await Task.Run(() => dbt.User_Info.ToList()
                                         .Where(u => u.user_Id == token.user_id && u.token == token.token)
                                         .FirstOrDefault());

                if (user == null)
                    return Ok("INVALID");

                string result = tokenizer.validateToken(token.token);

                if (result == "VALID")
                {
                    var status = await Task.Run(() => dbt.Complaints.Select(d => d.status).Distinct().ToList());
                    return Ok(status);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex + "An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }
    }
}