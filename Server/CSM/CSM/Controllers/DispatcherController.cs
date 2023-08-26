using CSM.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace CSM.Controllers
{
    public class DispatcherController : ApiController
    {
        CSMEntities1 db = new CSMEntities1();

        [HttpGet]
        [Route("api/Dispatcher/GetEmployees")]
        public async Task<IHttpActionResult> GetEmployees()
        {
            try
            {
                var employeeDetails = await Task.Run(() => db.User_Info.ToList()
                                       .Where(User_Info => User_Info.role_id == 3 && User_Info.address == "Satara")
                                       .Select(User_Info => User_Info)
                                       .FirstOrDefault());
                return Ok(employeeDetails);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine(ex + "An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }

        /*[HttpGet]
        [Route("api/Dispatcher/GetOrders")]
        public async Task<IHttpActionResult> GetOrders(String Location)
        {
            try
            {
                var orders = await Task.Run(() => db.Orders.ToList()
                             .Where (Order => Order.receiver_address == ));
                return Ok(orders);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine(ex + "An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }*/

        [HttpGet]
        [Route("api/Dispatcher/GetOrders/{id}")]
        public IHttpActionResult GetOrders(int id)
        {
            try
            {
                var orders = (from order in db.Orders
                              join Dispatcher in db.Dispatchers on order.receiver_address equals Dispatcher.hub_location
                              where Dispatcher.dispatcher_id == id
                              select order).ToList(); 
                             
                return Ok(orders);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine(ex + "An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }

        [HttpGet]
        [Route("api/Dispatcher/GetComplaints")]
        public async Task<IHttpActionResult> GetComplaints()
        {
            try
            {
                var complaintDetails = await Task.Run(() => db.Complaints.ToList()
                                       .Where(Complaint => Complaint.role_id == 3 && Complaint.role_id == 4)
                                       .Select(Complaint => Complaint));
 
                return Ok(complaintDetails);
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
