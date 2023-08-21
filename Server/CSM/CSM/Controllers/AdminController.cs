using CSM.Models;
using System;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace CSM.Controllers
{
    public class AdminController : ApiController
    {
        CSMEntities1 db = new CSMEntities1 ();

        [HttpGet]
        [Route("api/Admin/GetOrders")]
        public IHttpActionResult GetOrders() 
        {
            var orders = db.Orders.ToList();
            return Ok(orders);
        }


        [HttpGet]
        [Route("api/Admin/GetCities")]
        public IHttpActionResult GetCities()
        {
            var cities = (from Dispatcher in db.Dispatchers.ToList()
                          select Dispatcher.hub_location).Distinct();
            return Ok(cities);
        }


        [HttpGet]
        [Route("api/Admin/GetOrders/{id}")]
        public IHttpActionResult GetOrders(string id)
        {
            var orders = (from Orders in db.Orders.ToList()
                          where id == Orders.receiver_address
                          select Orders).ToList();
            return Ok(orders);
        }


        [HttpGet]
        [Route("api/Admin/GetEmployees/{id}")]
        public IHttpActionResult GetEmployees(string id)
        {
            var roleId = (from Roles in db.Roles.ToList()
                          where Roles.role_name == id
                          select Roles.role_id).FirstOrDefault();
            
            var employees = (from User_Info in db.User_Info.ToList()
                             where User_Info.role_id == roleId
                             select User_Info).ToList();

            return Ok(employees);
        }

        [HttpGet]
        [Route("api/Admin/GetRoles")]
        public IHttpActionResult GetRoles()
        {
            var roles = (from Roles in db.Roles.ToList()
                         where Roles.role_id  != 4
                        select Roles.role_name).Distinct();
            return Ok(roles);
        }


        [HttpPut]
        [Route("api/Admin/DeleteEmployee/{id}")]
        public IHttpActionResult DeleteEmployee(int id)
        {
            var employeeToUpdate = (from User_Info in db.User_Info.ToList()
                                    where User_Info.user_Id == id
                                    select User_Info).FirstOrDefault();
            employeeToUpdate.status = "INACTIVE";
            int result = db.SaveChanges();
            return Ok(result);
        }



        [HttpGet]
        [Route("api/Admin/GetEmployeeDetails/{id}")]
        public IHttpActionResult GetEmployeeDetails(int id)
        {
            var employeeDetails = (from User_Info in db.User_Info.ToList()
                                    where User_Info.user_Id == id
                                    select User_Info).FirstOrDefault();
            return Ok(employeeDetails);
        }



        [HttpPut]
        [Route("api/Admin/UpdateEmployeeDetails/{id}")]
        public IHttpActionResult UpdateEmployee(int id, [FromBody] User_Info user)
        {
            var employeeToUpdate = db.User_Info.ToList()
                .Where(User_Info => User_Info.user_Id == id)
                .FirstOrDefault();
            employeeToUpdate.first_name = user.first_name;
            employeeToUpdate.last_name = user.last_name;
            employeeToUpdate.address = user.address;
            employeeToUpdate.mobile = user.mobile;
            employeeToUpdate.email = user.email;
            employeeToUpdate.status = user.status;
            int result = db.SaveChanges();
            return Ok(result);
        }




    }
}
