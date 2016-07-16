using System.Web.Mvc;
using Samskar.Handlers;

namespace Samskar.Controllers
{
    public class AlbumController : Controller
    {
        private readonly ICloudHandler _cloudHandler;

        public AlbumController(ICloudHandler cloudHandler)
        {
            _cloudHandler = cloudHandler;
        }

        public ActionResult Index(string name)
        {
            ViewBag.AlbumName = name;
            ViewBag.Images = _cloudHandler.GetAlbumImages(name);
            return View();
        }
    }
}
