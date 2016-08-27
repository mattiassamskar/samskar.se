import React from 'react';
import { getAlbumImages } from './AlbumService';

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
      {this.state.images.map(image => <ImageItem imageUrl={image} key={image} />)}
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
