using System.Collections.Generic;
using MediatR;
using Samskar.Models;

namespace Samskar.Requests
{
    public class AllImagesRequest : IRequest<IEnumerable<Image>>
    {
    }
}