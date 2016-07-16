using System.Linq;
using System.Web.Mvc;
using Samskar.Handlers;

namespace Samskar.Controllers
{
    public class HomeController : Controller
    {
        private readonly ICloudHandler _cloudHandler;

        public HomeController(ICloudHandler cloudHandler)
        {
            _cloudHandler = cloudHandler;
        }

        public ActionResult Index()
        {
            ViewBag.Albums = _cloudHandler.GetAlbums().OrderByDescending(d => d);
            return View();
        }
    }
}
