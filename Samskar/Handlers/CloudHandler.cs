using System;
using System.Collections.Generic;
using System.Linq;

using Microsoft.WindowsAzure.Storage.Blob;

namespace Samskar.Handlers
{
    public class CloudHandler : ICloudHandler
    {
        public IEnumerable<string> GetAlbums()
        {
            return GetContainer()
                .ListBlobs()
                .OfType<CloudBlobDirectory>()
                .Select(dir => dir.Prefix.TrimEnd('/'));
        }

        public IEnumerable<Uri> GetAlbumImages(string name)
        {
            return GetContainer()
                .GetDirectoryReference(name)
                .ListBlobs()
                .Select(x => x.Uri);
        }

        private CloudBlobContainer GetContainer()
        {
            return new CloudBlobContainer(new Uri(@"https://samskar.blob.core.windows.net/images"));
        }
    }
}