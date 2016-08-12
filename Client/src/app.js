require('./style.css');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import * as albumService from './albumService';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {images: []};
  }
  render() {
    return(
    <div>
      {this.state.images.map(image => <ImageItem imageUrl={image} key={image} />)}
    </div>);
  }
  componentDidMount() {
    albumService.getAlbumImages(this.props.params.albumName).then((result) => {
      this.setState({images: result.data});
    });
  }
}

const ImageItem = (props) => {
  return (
    <div>
      <img className="image" src={props.imageUrl}></img>
    </div>);
}

const AlbumItem = (props) => {
  return (
    <div className="albumItem">
      <Link to={'album/' + props.albumName}>{props.albumName}</Link>
    </div>);
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {albums: []};
  }
  componentDidMount() {
    albumService.getAlbums().then((result) => {
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

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="album/:albumName" component={Album}/>
  </Router>
), document.getElementById('content'));
