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

        [HttpGet]
        [Route("GetMyOrders/{id}")]
        public IHttpActionResult GetMyOrders(int id)
        {
            var orders = (from Order in dbt.Orders.ToList()
                          where Order.customer_id == id
                          select Order).ToList();

            return Ok(orders);

        }


        [HttpPost]
        [Route("GetByStatus")]
        public IHttpActionResult GetByStatus([FromBody] MyOrder myorder)
        {
            var orders = (from Order in dbt.Orders.ToList()
                          where Order.customer_id == myorder.Id && Order.status == myorder.Status
                          select Order).ToList();

            return Ok(orders);

        }

        [HttpGet]
        [Route("GetMyProfile/{id}")]
        public IHttpActionResult GetMyProfile(int id)
        {
            var profile = (from User_Info in dbt.User_Info.ToList()
                           where User_Info.user_Id == id
                           select User_Info).FirstOrDefault();

            return Ok(profile);
        }


        [HttpPut]
        [Route("UpdateProfileDetails/{id}")]
        public IHttpActionResult UpdateProfile(int id, [FromBody] User_Info profile)
        {
            var profileToUpdate = dbt.User_Info.ToList()
                .Where(User_Info => User_Info.user_Id == id)
                .Select(User_Info => User_Info)
                .FirstOrDefault();
            profileToUpdate.first_name = profile.first_name;
            profileToUpdate.last_name = profile.last_name;
            profileToUpdate.address = profile.address;
            profileToUpdate.mobile = profile.mobile;
            profileToUpdate.email = profile.email;
            int result = dbt.SaveChanges();
            return Ok(result);
        }

        [HttpGet]
        [Route("GetPackageType")]
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
        [Route("AddOrder")]
        public IHttpActionResult AddOrder([FromBody] EmployeeData data)
        {
            try
            {
                data.order.customer_id = data.data.user_id;
                data.order.status = "In Transit";
                data.order.personnel_id = (from Delivery in dbt.Delivery_Personnel.ToList()
                               where Delivery.location.ToUpper() == data.order.receiver_address.ToUpper()
                               select Delivery.personnel_id).FirstOrDefault();

              
                dbt.Orders.Add(data.order);
                int result = dbt.SaveChanges();
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
        public IHttpActionResult AddComplaint([FromBody] ComplaintData data)
        {
            try
            {
                Complaint newComplaint = new Complaint();
                newComplaint.complaint1 = data.complaint;
                newComplaint.placed_date = DateTime.Now;
                newComplaint.customer_id = data.id;
                newComplaint.order_id = data.order_id;
                newComplaint.status = "IN PROCESS";

                dbt.Complaints.Add(newComplaint);
                int result = dbt.SaveChanges();
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