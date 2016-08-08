using System.Collections.Generic;
using MediatR;
using Samskar.Requests;

namespace Samskar.Handlers
{
    public class AlbumsHandler : IRequestHandler<AlbumsRequest, IEnumerable<string>>, IRequestHandler<AlbumRequest, IEnumerable<string>>
    {
        public IEnumerable<string> Handle(AlbumsRequest message)
        {
            return new List<string>
            {
                "12 Summer",
                "1612 Christmas",
                "1401 Skiing in Italy"
            };
        }

        public IEnumerable<string> Handle(AlbumRequest message)
        {
            return new List<string>
            {
                "http://images.samskar.se/1.jpg",
                "http://images.samskar.se/2.jpg",
                "http://images.samskar.se/3.jpg"
            };
        }
    }
}