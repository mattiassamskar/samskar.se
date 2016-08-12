using System;
using System.Collections.Generic;
using System.Linq;
using MediatR;
using Microsoft.WindowsAzure.Storage.Blob;
using Samskar.Queries;

namespace Samskar.QueryHandlers
{
    public class AlbumsQueryHandler : IRequestHandler<AlbumsQuery, IEnumerable<string>>, IRequestHandler<AlbumQuery, IEnumerable<string>>
    {
        public IEnumerable<string> Handle(AlbumsQuery message)
        {
            return GetContainer()
                .ListBlobs()
                .OfType<CloudBlobDirectory>()
                .Select(dir => dir.Prefix.TrimEnd('/'));
        }

        public IEnumerable<string> Handle(AlbumQuery message)
        {
            return GetContainer()
                .GetDirectoryReference(message.Name)
                .ListBlobs()
                .Select(x => x.Uri.AbsoluteUri);
        }

        private CloudBlobContainer GetContainer()
        {
            return new CloudBlobContainer(new Uri(@"https://samskar.blob.core.windows.net/images"));
        }
    }
}