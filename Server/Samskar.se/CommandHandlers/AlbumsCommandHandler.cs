using MediatR;
using Samskar.Commands;
using Samskar.Notifications;

namespace Samskar.CommandHandlers
{
    public class AlbumsCommandHandler : RequestHandler<CreateAlbumCommand>
    {
        private readonly IMediator _mediator;

        public AlbumsCommandHandler(IMediator mediator)
        {
            _mediator = mediator;
        }

        protected override void HandleCore(CreateAlbumCommand message)
        {
            _mediator.Publish(new AlbumCreatedNotification {Name = message.Name});
        }
    }
}