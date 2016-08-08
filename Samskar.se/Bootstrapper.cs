using Nancy;
using Nancy.Bootstrapper;
using Nancy.Conventions;
using Nancy.TinyIoc;
using System;
using System.Collections.Generic;
using System.Configuration;

namespace Samskar
{
    public class Bootstrapper : DefaultNancyBootstrapper
    {
        protected override void ConfigureConventions(NancyConventions nancyConventions)
        {
            base.ConfigureConventions(nancyConventions);

            nancyConventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory(@"/", @"/Content"));
        }

        protected override void ApplicationStartup(TinyIoCContainer container, IPipelines pipelines)
        {
            base.ApplicationStartup(container, pipelines);

            //pipelines.BeforeRequest.AddItemToStartOfPipeline(CheckAuthorization);
        }

        private Response CheckAuthorization(NancyContext context)
        {
            if(context.Request.Method.Equals("GET", StringComparison.OrdinalIgnoreCase) || context.Request.Path == "/login")
                return null;

            try
            {
                var key = ConfigurationManager.AppSettings["jwtkey"];
                var token = context.Request.Headers.Authorization.Split(' ')[1];
                var payload = JWT.JsonWebToken.DecodeToObject(token, key) as IDictionary<string, object>;

                return null;
            }
            catch (Exception)
            {
                return new Response { StatusCode = HttpStatusCode.Unauthorized };
            }
        }
    }
}