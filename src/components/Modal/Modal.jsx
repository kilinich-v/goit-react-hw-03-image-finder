import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ imageModal, closeModal }) => {
  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    });
  });

  const onClick = e => {
    if (e.target.nodeName !== 'IMG') {
      closeModal();
    }
  }

  return (
    <div className="Overlay" onClick={onClick}>
      <div className="Modal">
        <img src={imageModal.url} alt={imageModal.alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imageModal: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
