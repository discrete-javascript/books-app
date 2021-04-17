import React from 'react';
import ReactModal from 'react-modal';
import ModalBody from './ModalBody';
import { ModalContainer } from './Modal.styles';
import { useDispatch, useSelector } from 'react-redux';
import { showOverlay, toggleOverlay } from '../articles/articlesSlice';

function Modal() {
  const dispatch = useDispatch();
  const show = useSelector(showOverlay);
  return (
    <ReactModal isOpen={show} contentLabel="Filter Modal" ariaHideApp={false}>
      <ModalContainer>
        <div>
          <button
            onClick={() => dispatch(toggleOverlay())}
            className="close-button"
          >
            X
          </button>
        </div>
        <div>
          <ModalBody />
        </div>
      </ModalContainer>
    </ReactModal>
  );
}

export default Modal;
