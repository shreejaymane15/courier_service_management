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
   
    public class CustomerController : ApiController
    {
        CSMEntities1 dbt = new CSMEntities1();

        [HttpGet]
        [Route("api/Customer/GetMyOrders/{id}")]
        public IHttpActionResult GetMyOrders(int id)
        {
           var orders = (from Order in dbt.Orders.ToList()
            where Order.customer_id == id 
              select Order).ToList();
           
                return Ok(orders);

        }

    }
}
