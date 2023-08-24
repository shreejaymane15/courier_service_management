using CSM.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
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
    }
}