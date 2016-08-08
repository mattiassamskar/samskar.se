using Nancy;

namespace Samskar
{
    public class ContentModule : NancyModule
    {
        public ContentModule()
        {
            Get["/"] = _ => Response.AsFile("Content/index.html");
        }
    }
}