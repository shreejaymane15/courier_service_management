using Antlr.Runtime.Misc;
using CSM.Models;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime;
using System.Security.Policy;
using System.Threading.Tasks;
using System.Web.Configuration;
using System.Web.Http;
using System.Web.UI.WebControls;

namespace CSM.Controllers
{
    public class DeliveryPersonnelController : ApiController
    {
        CSMEntities1 db=new CSMEntities1 ();    
        [HttpGet]
        [Route("api/DeliveryPersonnel/GetMyOrders/{id}")]
        public IHttpActionResult GetMyOrders(int id)
        {
            var orders = (from Order in db.Orders.ToList()
                          where Order.personnel_id == id
                          select Order).ToList();

            return Ok(orders);

        }


        [HttpPut]
        [Route("api/DeliveryPersonnel/OrderDelivered/{id}")]
        public IHttpActionResult OrderDelivered(int id)
        {
            var orders = (from Order in db.Orders.ToList()
                          where Order.order_id == id
                          select Order).FirstOrDefault();
            orders.status = "Delivered";
            int result = db.SaveChanges();  
            return Ok(result);

        }


        [HttpPut]
        [Route("api/DeliveryPersonnel/OrderUndelivered/{id}")]
        public IHttpActionResult OrderUndelivered(int id)
        {
            var orders = (from Order in db.Orders.ToList()
                          where Order.order_id == id
                          select Order).FirstOrDefault();
            if (orders.status!="Delivered")
            {
                orders.status = "Undelivered";
            }
            
            int result = db.SaveChanges();
            return Ok(result);

        }

        [HttpPost]
        [Route("api/DeliveryPersonnel/AddComplaint")]
        public IHttpActionResult AddComplaint([FromBody]ComplaintData data)
        {
            try
            {
                Complaint newComplaint = new Complaint();
                newComplaint.complaint1 = data.complaint;
                newComplaint.placed_date=DateTime.Now;  
                newComplaint.customer_id=data.id;
                newComplaint.order_id = data.order_id;
                newComplaint.status = "IN PROCESS";

                db.Complaints.Add(newComplaint);
                int result = db.SaveChanges();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpGet]
        [Route("api/DeliveryPersonnel/GetOrderId/{id}")]
        public async Task<IHttpActionResult> GetOrdeId(int id)
        {
            try
            {
                var OrderId = await Task.Run(() => db.Orders.ToList()
                    .Where(Order => Order.personnel_id == id)
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








