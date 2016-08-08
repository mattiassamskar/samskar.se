using System.Collections.Generic;

namespace Samskar
{
    public class ImagesService : IImagesService
    {
        public IEnumerable<Image> GetAllImages()
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