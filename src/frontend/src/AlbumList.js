import React from 'react';
import { Link } from 'react-router';
import { getAlbums } from './AlbumService';

class AlbumList extends React.Component {
  constructor() {
    super();
    this.state = {albums: []};
  }
  componentDidMount() {
    getAlbums().then((result) => {
      let albums = Array.from(result.data);
      albums.reverse();
      this.setState({albums: albums});
    });
  }
  render() {
    return (
      <div className="main">
        <div className="title">Familjen Sämskar</div>
        {this.state.albums.map(album => <AlbumItem albumName={album} key={album} />)}
      </div>);
  }
}

const AlbumItem = (props) => {
  return (
    <div className="albumItem">
      <Link to={'albums/' + props.albumName}>{props.albumName}</Link>
    </div>);
}

export default AlbumList;
