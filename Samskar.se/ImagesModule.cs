using System.Collections.Generic;
using Nancy;

namespace Samskar
{
    public class ImagesModule : NancyModule
    {
        public ImagesModule() : base("/images")
        {
            Get["/"] = _ => GetAllImages();
        }

        private IEnumerable<Image> GetAllImages()
        {
            return new List<Image>
            {
                new Image {Url = "http://images.samskar.se/1.jpg"},
                new Image {Url = "http://images.samskar.se/2.jpg"},
                new Image {Url = "http://images.samskar.se/3.jpg"}
            };
        }
    }

    public class Image
    {
        public string Url { get; set; }
    }
}