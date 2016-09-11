import React from 'react';
import { getAlbumImages } from './AlbumService';
import  Gallery  from './Gallery'

class ImageList extends React.Component {
  constructor() {
    super();
    this.state = {images: []};
  }
  componentDidMount() {
    getAlbumImages(this.props.params.albumName).then((result) => {
      this.setState({ images: result.data });
    });
  }
  render() {
    return (
    <div>
      <Gallery elements={this.state.images} />
    </div>);
  }
}

const ImageItem = (props) => {
  return (
    <div>
      <img className="image" src={props.imageUrl}></img>
    </div>);
}

export default ImageList;
