using System.Collections.Generic;
using Nancy;
using Samskar.Models;
using Samskar.Services;

namespace Samskar.Api
{
    public class ImagesModule : NancyModule
    {
        private readonly IImagesService _imagesService;

        public ImagesModule(IImagesService imagesService) : base("/images")
        {
            _imagesService = imagesService;

            Get["/"] = _ => GetAllImages();
        }

        private IEnumerable<Image> GetAllImages()
        {
            return _imagesService.GetAllImages();
        }
    }
}