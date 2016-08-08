using System.Collections.Generic;
using MediatR;

namespace Samskar.Requests
{
    public class AlbumRequest : IRequest<IEnumerable<string>>
    {
        public string Name { get; set; }
    }
}