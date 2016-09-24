var React = require('react');
var Masonry = require('react-masonry-component');

var masonryOptions = {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true
};

var Gallery = React.createClass({
    render: function () {
        var childElements = this.props.elements.map(function (element) {
            return (
                <div className="grid-item" key={element}>
                    <img src={element} />
                </div>
            );
        });

        return (
            <Masonry options={masonryOptions} updateOnEachImageLoad={true}>
                <div className="grid-sizer"></div>
                <div className="gutter-sizer"></div>
                {childElements}
            </Masonry>
        );
    }
});

module.exports = Gallery;
