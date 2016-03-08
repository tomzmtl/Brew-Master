import React from 'react';
import Marketplace from './Marketplace'; // eslint-disable-line no-unused-vars

const Modal = (props) => {
  if (props.activeModal === null) {
    return <div />;
  }

  const modalProps = {
    onCloseClick: props.onCloseClick,
  };

  return (
    <div className="overlay">
      <Marketplace {...modalProps} />
    </div>
  );
};

export default Modal;
