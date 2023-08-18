using CSM.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace CSM.Controllers
{
    [EnableCors("*", "*", "*")]
    public class AdminController : ApiController
    {
        CSMEntities1 db = new CSMEntities1 ();

        [HttpGet]
        public IHttpActionResult GetOrders() 
        {
            var orders = db.Orders.ToList();
            return Ok(orders);
        }
        
    }
}
