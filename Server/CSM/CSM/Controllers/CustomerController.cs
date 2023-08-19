using CSM.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.UI.WebControls;

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
            
    }
}
