using System.Collections.Generic;
using MediatR;
using Nancy;
using Samskar.Models;
using Samskar.Requests;

namespace Samskar.Api
{
    public class ImagesModule : NancyModule
    {
        private readonly IMediator _mediator;

        public ImagesModule(IMediator mediator) : base("/images")
        {
            _mediator = mediator;

            Get["/"] = _ => GetAllImages();
        }

        private IEnumerable<Image> GetAllImages()
        {
            return _mediator.Send(new AllImagesRequest());
        }
    }
}