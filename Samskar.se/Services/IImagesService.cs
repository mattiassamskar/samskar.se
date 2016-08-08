using System.Collections.Generic;
using Samskar.Models;

namespace Samskar.Services
{
    public interface IImagesService
    {
        IEnumerable<Image> GetAllImages();
    }
}