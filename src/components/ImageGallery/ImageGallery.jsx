import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { fetchGallery } from '../../gallery-servises/apiGallery';
import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const ImageGallery = ({ query, page, changePage }) => {
  const [images, setImages] = useState([]);
  const [imageModal, setImageModal] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);

    fetchGallery(query, page)
      .then(data => setImages(prev => [...prev, ...data]))
      .then(() => {
        if (page > 1)
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
      })
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [query, page]);

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    setImages([]);
  }, [query]);

  const onClickImage = (url, alt) => {
    setImageModal({ url, alt });
  };

  const closeModal = () => {
    setImageModal(null);
  }

  return (
    <div className="container">
      <ImageGalleryItem images={images} onClick={onClickImage} />
      {error && <h2>{error}</h2>}
      {imageModal && <Modal imageModal={imageModal} closeModal={closeModal} />}
      {isLoading && (
        <div className="spinner">
          <Loader type="ThreeDots" color="#00BFFF" height={30} width={50} />
        </div>
      )}
      {!isLoading && query && <Button onClick={changePage} />}
    </div>
  );
};

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default ImageGallery;
