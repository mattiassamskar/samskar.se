using System.Collections.Generic;

namespace Samskar
{
    public interface IImagesService
    {
        IEnumerable<Image> GetAllImages();
    }
}