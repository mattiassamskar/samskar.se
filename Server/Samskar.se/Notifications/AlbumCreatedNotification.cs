using MediatR;

namespace Samskar.Notifications
{
    public class AlbumCreatedNotification : INotification
    {
        public string Name { get; set; }
    }
}