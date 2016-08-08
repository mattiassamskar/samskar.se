using System.Collections.Generic;
using MediatR;
using Samskar.Queries;

namespace Samskar.QueryHandlers
{
    public class AlbumsQueryHandler : IRequestHandler<AlbumsQuery, IEnumerable<string>>, IRequestHandler<AlbumQuery, IEnumerable<string>>
    {
        public IEnumerable<string> Handle(AlbumsQuery message)
        {
            return new List<string>
            {
                "12 Summer",
                "1612 Christmas",
                "1401 Skiing in Italy"
            };
        }

        public IEnumerable<string> Handle(AlbumQuery message)
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