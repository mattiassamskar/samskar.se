using System.Collections.Generic;
using MediatR;

namespace Samskar.Queries
{
    public class AlbumQuery : IRequest<IEnumerable<string>>
    {
        public string Name { get; set; }
    }
}