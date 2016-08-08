using System.Collections.Generic;
using MediatR;
using Nancy;
using Samskar.Requests;

namespace Samskar.Api
{
    public class AlbumsModule : NancyModule
    {
        private readonly IMediator _mediator;

        public AlbumsModule(IMediator mediator) : base("/albums")
        {
            _mediator = mediator;

            Get["/"] = _ => GetAlbums();
            Get["/{name}"] = _ => GetAlbum(_.name);
        }

        private IEnumerable<string> GetAlbums()
        {
            return _mediator.Send(new AlbumsRequest());
        }

        private IEnumerable<string> GetAlbum(string name)
        {
            return _mediator.Send(new AlbumRequest { Name = name });
        }
    }
}