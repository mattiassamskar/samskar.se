using System.Collections.Generic;
using MediatR;

namespace Samskar.Requests
{
    public class AlbumsRequest : IRequest<IEnumerable<string>>
    {
    }
}