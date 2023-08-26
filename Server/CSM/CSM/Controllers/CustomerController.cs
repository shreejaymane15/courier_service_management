    using CSM.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Razor.Tokenizer;
using System.Web.Security;
using System.Xml.XPath;
using System.Web.UI.WebControls;



namespace CSM.Controllers
{
    [RoutePrefix("api/Customer")]
    public class CustomerController : ApiController
    {
        CSMEntities1 dbt = new CSMEntities1();
        JWTTokenizer tokenizer = new JWTTokenizer();
        /*  [HttpGet]
          [Route("GetMyOrders/{id}")]
          public IHttpActionResult GetMyOrders(int id)
          {
              var orders = (from Order in dbt.Orders.ToList()
                            where Order.customer_id == id
                            select Order).ToList();

              return Ok(orders);

          }*/

        [HttpPut]
        [Route("api/Customer/GetMyOrders/{id}")]
        public async Task<IHttpActionResult> GetMyOrders(int id, [FromBody] CheckToken token)
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
                   

                    var orders = (from Order in dbt.Orders.ToList()
                                  where Order.customer_id == id
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
        [Route("api/Customer/GetStatus")]
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
        [Route("api/Customer/GetMyProfile")]
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
        [Route("api/Customer/SaveMyProfile/{id}")]
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

        [HttpGet]
        [Route("Customer/GetPackageType")]
        public async Task<IHttpActionResult> GetPackageType()
        {
            try
            {
                var type = await Task.Run(() => dbt.Package_Price.ToList()
                    .Select(Package => Package)
                    .ToList());
                return Ok(type);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine(ex + "An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }

        [HttpPost]
        [Route("Customer/AddOrder")]
        public async Task<IHttpActionResult> AddOrder([FromBody] OrderData order)
        {
            try
            {
                var user = await Task.Run(() => dbt.User_Info.ToList()
                                    .Where(u => u.user_Id == order.data.user_id && u.token == order.data.token)
                                    .FirstOrDefault());

                if (user == null)
                    return Ok("INVALID");

                string result = tokenizer.validateToken(order.data.token);
                if (result == "VALID")
                {
                    order.status = "In Transit";

                    dbt.Orders.Add();
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
        [Route("api/Customer/AddComplaint")]
        
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
                    newComplaint.customer_id = data.id;
                    newComplaint.order_id = data.order_id;
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
    }
}