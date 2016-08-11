require('./style.css');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

class Album extends React.Component {
  constructor() {
    super();
    this.state = {images: []};
  }
  render() {
    return(
    <div>
      {this.state.images.map(image => <ImageItem imageUrl={image} />)}
    </div>);
  }
  componentDidMount() {
    this.setState({images: [
      "https://samskar.blob.core.windows.net/images/1508%20Sicilien/001.jpg",
      "https://samskar.blob.core.windows.net/images/1508%20Sicilien/002.jpg",
      "https://samskar.blob.core.windows.net/images/1508%20Sicilien/003.jpg"
    ]});
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
    this.setState({albums: [
      "1607 Norrland",
      "1607 Kreta",
      "1512 Julafton",
      "1401 Fjällen",
      "1301 Barnen fyller år"
    ]});
  }
  render() {
    return (
      <div className="main">
        <div className="title">Familjen Sämskar</div>
        {this.state.albums.map(album => <AlbumItem albumName={album} />)}
      </div>);
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="album/:albumName" component={Album}/>
  </Router>
), document.getElementById('content'));
