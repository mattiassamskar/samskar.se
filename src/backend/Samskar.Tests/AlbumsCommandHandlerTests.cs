using MediatR;
using NSubstitute;
using Samskar.CommandHandlers;
using Samskar.Commands;
using Samskar.Notifications;
using Xunit;

namespace Samskar.Tests
{
    public class AlbumsCommandHandlerTests
    {
        [Fact]
        public void Should_Notify_When_Creating_Album()
        {
            // Arrange
            var mediator = Substitute.For<IMediator>();
            var handler = new AlbumsCommandHandler(mediator);

            // Act
            handler.Handle(new CreateAlbumCommand {Name = "name"});

            // Assert
            mediator.Received().Publish(Arg.Is<AlbumCreatedNotification>(n => n.Name == "name"));
        }
    }
}