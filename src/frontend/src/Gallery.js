import React from 'react';
import Masonry from 'react-masonry-component';

class Gallery extends React.Component {
    constructor() {
        super();
        this.options = {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            percentPosition: true,
        };
    }
    render() {
        var images = this.props.images.map((image) => {
            return (
                <div className="grid-item" key={image}>
                    <img src={image} />
                </div>
            );
        });
        return (
            <Masonry options={this.options} updateOnEachImageLoad={true}>
                <div className="grid-sizer"></div>
                <div className="gutter-sizer"></div>
                {images}
            </Masonry>
        );
    }
}

export default Gallery;
