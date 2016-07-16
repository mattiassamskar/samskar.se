﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using TinyIoC;

namespace Samskar
{
    public class TinyIocMvcResolver : IDependencyResolver
    {
        private readonly TinyIoCContainer _container;
        
        public TinyIocMvcResolver(TinyIoCContainer container)
        {
            _container = container;
        }

        public object GetService(Type serviceType)
        {
            try
            {
                return _container.Resolve(serviceType);
            }
            catch (Exception)
            {
                return null;
            }
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            try
            {
                return _container.ResolveAll(serviceType, true);
            }
            catch (Exception)
            {
                return Enumerable.Empty<object>();
            }
        }
    }
}