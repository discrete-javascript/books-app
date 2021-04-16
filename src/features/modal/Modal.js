import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const ModalContainer = styled.div(
  () => `
.close-button {
   padding: 10px;
  border-radius: 6px;
  margin-right: 10px;
  cursor: pointer;
  background: #131325;
  border: 1px solid white;
  color: white;
  float: right;
}
`
);

function Modal({ show, handleShowOverlay }) {
  const handleCloseModal = () => {
    handleShowOverlay(false);
  };

  return (
    <ReactModal isOpen={show} contentLabel="Filter Modal">
      <ModalContainer>
        <button onClick={handleCloseModal} className="close-button">
          X
        </button>
      </ModalContainer>
    </ReactModal>
  );
}

export default Modal;
