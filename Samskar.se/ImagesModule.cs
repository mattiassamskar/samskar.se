using System.Collections.Generic;
using Nancy;

namespace Samskar
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

    public class Image
    {
        public string Url { get; set; }
    }
}