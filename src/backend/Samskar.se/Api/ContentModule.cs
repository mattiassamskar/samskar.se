using Nancy;

namespace Samskar.Api
{
    public class ContentModule : NancyModule
    {
        public ContentModule()
        {
            Get["/"] = _ => Response.AsFile("Content/index.html");
        }
    }
}