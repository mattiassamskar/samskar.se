using MediatR;

namespace Samskar.Commands
{
    public class CreateAlbumCommand : IRequest
    {
        public string Name { get; set; }
    }
}