using CSM.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

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
    }
}
