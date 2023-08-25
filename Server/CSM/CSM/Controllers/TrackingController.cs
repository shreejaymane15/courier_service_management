using CSM.Models;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Razor.Tokenizer;

namespace CSM.Controllers
{
    public class TrackingController : ApiController
    {

        [HttpPut]
        [Route("GetShipmentsDetails/{trackingNumber}")]
        public async Task<IHttpActionResult> GetShipmentDetails(int trackingNumber, [FromBody] CheckToken token)
        {
            CSMEntities1 db = new CSMEntities1 ();
            JWTTokenizer tokenizer = new JWTTokenizer();

            try
            {
                var user = await Task.Run(() => db.User_Info
                                    .Where(u => u.user_Id == token.user_id && u.token == token.token)
                                    .FirstOrDefault());

                if (user == null)
                    return Ok("INVALID");

                string result = tokenizer.validateToken(token.token);

                if (result == "VALID")
                {
                    var shipment = await Task.Run(() => db.Trackings.ToList()
                                             .Where(Track => Track.tracking_id == trackingNumber)
                                             .FirstOrDefault());
                    return Ok(shipment);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex + " An error occurred while processing the request.");
                return InternalServerError(ex);
            }
        }
    }
}
