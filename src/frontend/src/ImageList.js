import React from 'react';
import { getAlbumImages } from './AlbumService';
import Gallery  from './Gallery'

class ImageList extends React.Component {
  constructor() {
    super();
    this.state = { images: [] };
  }
  componentDidMount() {
    getAlbumImages(this.props.params.albumName).then((result) => {
      this.setState({ images: result.data });
    });
  }
  render() {
    return (
      <div className="grid">
        <Gallery images={this.state.images} />
      </div>);
  }
}

export default ImageList;
