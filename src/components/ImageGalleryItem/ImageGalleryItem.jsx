import PropTypes from 'prop-types'

const ImageGalleryItem = ({ images, onClick }) => {
  const makeImageAlt = data => {
    return data.slice(27, data.length - 1)
      .replace(/[0-9]+/, '')
      .split('-')
      .join(' ');
  }

  return (
    <ul className="ImageGallery">
      {images.map(image => {
        return (
          <li
            key={image.id}
            className="ImageGalleryItem"
            onClick={() =>
              onClick(image.largeImageURL, makeImageAlt(image.pageURL))
            }
          >
            <img
              src={image.webformatURL}
              alt={makeImageAlt(image.pageURL)}
              className="ImageGalleryItem-image"
            />
          </li>
        );
      })}
    </ul>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

