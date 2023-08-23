using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Services;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace CSM.Controllers
{
    [RoutePrefix("api/Tracking")]
    public class TrackingController : ApiController
    {
        // GET: Tracking
        public ActionResult Index()
        {
            return View();
        }
    }
}




[Route("api/[controller]")]
[ApiController]
public class TrackingController : ControllerBase
{
    private readonly ITrackingService _trackingService; // Interface for your tracking service

    public TrackingController(ITrackingService trackingService)
    {
        _trackingService = trackingService;
    }

    [HttpGet("shipments/{trackingNumber}")]
    public async Task<IActionResult> GetShipmentDetails(string trackingNumber)
    {
        try
        {
            var shipment = await _trackingService.GetShipmentDetailsAsync(trackingNumber);
            if (shipment == null)
            {
                return NotFound("Shipment not found.");
            }

            return Ok(shipment);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"An error occurred: {ex.Message}");
        }
    }
}
