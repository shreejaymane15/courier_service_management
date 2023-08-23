using CSM.Models;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace CSM.Controllers
{
    public class AdminController : ApiController
    {
        CSMEntities1 db = new CSMEntities1();

        [HttpGet]
        [Route("api/Admin/GetOrders")]
        public async Task<IHttpActionResult> GetOrders()
        {
            try
            {
                var orders = await Task.Run(()=>db.Orders.ToList());
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
        [Route("api/Admin/GetCities")]
        public async Task<IHttpActionResult> GetCities()
        {
            try
            {
                var cities = await Task.Run(() => db.Dispatchers.ToList()
                                .Select(Dispatcher => Dispatcher.hub_location)
                                .Distinct());
                return Ok(cities);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine(ex + "An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }


        [HttpGet]
        [Route("api/Admin/GetOrders/{id}")]
        public async Task<IHttpActionResult> GetOrders(string id)
        {
            try{
                var orders = await Task.Run(()=>db.Orders.ToList()
                                .Where(Orders => id == Orders.receiver_address)
                                .Select(Orders => Orders)
                                .ToList());
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
        [Route("api/Admin/GetEmployees/{id}")]
        public async Task<IHttpActionResult> GetEmployees(string id)
        {
            try{
                var roleId = await Task.Run((() => db.Roles.ToList()
                          .Where(Roles => Roles.role_name == id)
                          .Select(Roles => Roles.role_id).FirstOrDefault()));

                var employees = await Task.Run(() => db.User_Info.ToList()
                         .Where(User_Info => User_Info.role_id == roleId)
                         .Select(User_Info => User_Info).ToList());

                return Ok(employees);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine(ex + "An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }

        [HttpGet]
        [Route("api/Admin/GetRoles")]
        public async Task<IHttpActionResult> GetRoles()
        {
            try
            {
                var roles = await Task.Run(() => db.Roles
                    .Where(role => role.role_id != 4)
                    .Select(role => role.role_name)
                    .Distinct()
                    .ToList());
                return Ok(roles);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine(ex + "An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }


        [HttpPut]
        [Route("api/Admin/DeleteEmployee/{id}")]
        public async Task<IHttpActionResult> DeleteEmployee(int id)
        {
            try
            {
            var employeeToUpdate = await Task.Run(() => db.User_Info.ToList()
                                    .Where(User_Info => User_Info.user_Id == id)
                                    .Select(User_Info => User_Info)
                                    .FirstOrDefault());
            employeeToUpdate.status = "INACTIVE";
            int result = db.SaveChanges();
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
        [Route("api/Admin/GetEmployeeDetails/{id}")]
        public async Task<IHttpActionResult> GetEmployeeDetails(int id)
        {
            try
            {
                var employeeDetails = await Task.Run(() => db.User_Info.ToList()
                                       .Where(User_Info => User_Info.user_Id == id)
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

        [HttpPut]
        [Route("api/Admin/UpdateEmployeeDetails/{id}")]
        public async Task<IHttpActionResult> UpdateEmployee(int id, [FromBody] User_Info user)
        {
            try
            {
                var employeeToUpdate = await Task.Run(() => db.User_Info.ToList()
                    .Where(User_Info => User_Info.user_Id == id)
                    .FirstOrDefault());
                employeeToUpdate.first_name = user.first_name;
                employeeToUpdate.last_name = user.last_name;
                employeeToUpdate.address = user.address;
                employeeToUpdate.mobile = user.mobile;
                employeeToUpdate.email = user.email;
                employeeToUpdate.status = user.status;
                int result = db.SaveChanges();
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
        [Route("api/Admin/AddEmployeeDetails")]
        public async Task<IHttpActionResult> AddEmployeeDetails([FromBody] EmployeeData data)
        {
            try
            {
                User_Info newUser = new User_Info();
                newUser = data.user;
                newUser.status = "ACTIVE";
                newUser.role_id = await Task.Run(() => db.Roles.ToList()
                                       .Where(Roles => Roles.role_name == data.role_name)
                                       .Select(Roles => Roles.role_id)
                                       .FirstOrDefault());
                db.User_Info.Add(newUser);
                int result = db.SaveChanges();
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
        [Route("api/Admin/GetCustomerCities")]
        public async Task<IHttpActionResult> GetCustomerCities()
        {
            try
            {
                var cities = await Task.Run(() => db.User_Info.ToList()
                                .Where(User => User.role_id == 4)
                                .Select(User => User.address)
                                .Distinct());
                return Ok(cities);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine(ex + "An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }


        [HttpGet]
        [Route("api/Admin/GetCustomers")]
        public async Task<IHttpActionResult> GetCustomers()
        {
            try
            {
                var customers = await Task.Run(() => db.User_Info.ToList()
                                           .Where(User => User.role_id == 4)
                                           .Select(User => User));
                return Ok(customers);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine(ex + "An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }



        [HttpGet]
        [Route("api/Admin/GetCustomers/{id}")]
        public async Task<IHttpActionResult> GetCustomers(string id)
        {
            try
            {
                var customers = await Task.Run(() => db.User_Info.ToList()
                                .Where(User => id == User.address && User.role_id == 4)
                                .Select(User => User)
                                .ToList());
                return Ok(customers);
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
