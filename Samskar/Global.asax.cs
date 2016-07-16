using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Samskar.Handlers;
using TinyIoC;

namespace Samskar
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            var container = TinyIoCContainer.Current;
            container.Register<ICloudHandler, CloudHandler>().AsSingleton();

            DependencyResolver.SetResolver(new TinyIocMvcResolver(container));
        }
    }
}