using System.Collections.Generic;
using MediatR;
using Samskar.Models;
using Samskar.Requests;

namespace Samskar.Handlers
{
    public class ImagesHandler : IRequestHandler<AllImagesRequest, IEnumerable<Image>>
    {
        public IEnumerable<Image> Handle(AllImagesRequest message)
        {
            return new List<Image>
            {
                new Image {Url = "http://images.samskar.se/1.jpg"},
                new Image {Url = "http://images.samskar.se/2.jpg"},
                new Image {Url = "http://images.samskar.se/3.jpg"}
            };
        }
    }
}