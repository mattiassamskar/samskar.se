using System;
using System.Collections.Generic;

namespace Samskar.Handlers
{
    public interface ICloudHandler
    {
        IEnumerable<string> GetAlbums();
        IEnumerable<Uri> GetAlbumImages(string name);
    }
}