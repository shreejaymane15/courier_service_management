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
        [Route("api/Dispatcher/GetEmployees/{id}")]
        public async Task<IHttpActionResult> GetEmployees(int id)
        {
            try
            {
                var employeeDetails = await Task.Run(() => db.User_Info.ToList()
                                       .Where(User_Info => User_Info.role_id == 3)
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

    }
}
