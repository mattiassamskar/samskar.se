using System.Collections.Generic;
using MediatR;

namespace Samskar.Queries
{
    public class AlbumsQuery : IRequest<IEnumerable<string>>
    {
    }
}