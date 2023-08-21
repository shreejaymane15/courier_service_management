using CSM.Models;
using System.Web.Http;
using System.Linq;
using System.Web.Http.Cors; 

namespace CSM.Controllers
{
    [RoutePrefix("api/Login")]
    public class LoginController : ApiController
    {
        CSMEntities1 db = new CSMEntities1();

        [HttpPost]
        [Route("Login")]
        public IHttpActionResult Login([FromBody] Login login)
        {
            User_Info user = (from User_Info in db.User_Info.ToList()
                                where User_Info.email == login.email && User_Info.password == login.password
                                select User_Info).FirstOrDefault();
            if (user != null)
            {
                var data = new { user_id =  user.user_Id, role_id = user.role_id};
                return Ok(data);

            }
            else
            {
                return NotFound();
            }
        }


        [HttpPost]
        [Route("SignUp")]
        public string SignUp([FromBody] User_Info user)
        {
            user.role_id = 4;
            user.status = "ACTIVE";
            db.User_Info.Add(user);
            int result = db.SaveChanges();
            if (result == 0)
            {
                return "FALSE";
            }
            else { 
                return "TRUE";
            }
        }
    }
}
