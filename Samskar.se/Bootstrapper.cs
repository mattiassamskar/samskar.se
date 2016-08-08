using Nancy;
using Nancy.Bootstrapper;
using Nancy.Conventions;
using System;
using System.Collections.Generic;
using System.Configuration;
using MediatR;
using Nancy.Bootstrappers.StructureMap;
using StructureMap;
using StructureMap.Graph;

namespace Samskar
{
    public class Bootstrapper : StructureMapNancyBootstrapper
    {
        protected override void ConfigureConventions(NancyConventions nancyConventions)
        {
            base.ConfigureConventions(nancyConventions);

            nancyConventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory(@"/", @"/Content"));
        }

        protected override void ApplicationStartup(IContainer container, IPipelines pipelines)
        {
            base.ApplicationStartup(container, pipelines);

            container.Configure(cfg =>
            {
                cfg.Scan(scanner =>
                {
                    scanner.TheCallingAssembly();
                    scanner.AddAllTypesOf(typeof(IRequestHandler<,>));
                    scanner.AddAllTypesOf(typeof(INotificationHandler<>));
                });
                cfg.For<SingleInstanceFactory>().Use<SingleInstanceFactory>(ctx => t => ctx.GetInstance(t));
                cfg.For<MultiInstanceFactory>().Use<MultiInstanceFactory>(ctx => t => ctx.GetAllInstances(t));
                cfg.For<IMediator>().Use<Mediator>();
            });

            //pipelines.BeforeRequest.AddItemToStartOfPipeline(CheckAuthorization);
        }

        private Response CheckAuthorization(NancyContext context)
        {
            if (context.Request.Method.Equals("GET", StringComparison.OrdinalIgnoreCase) ||
                context.Request.Path == "/login")
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
                return new Response {StatusCode = HttpStatusCode.Unauthorized};
            }
        }
    }
}