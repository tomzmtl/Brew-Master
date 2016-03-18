import React from 'react';
import Marketplace from './Marketplace';

const Modal = (props) => {
  if (props.activeModal === null) {
    return <div />;
  }

  const modalProps = {
    onCloseClick: props.onCloseClick,
    items: props.items,
    marketplace: {
      onItemClick: props.onMarketPlaceItemClick,
    },
    wallet: props.wallet,
  };

  return (
    <div className="overlay">
      <Marketplace {...modalProps} />
    </div>
  );
};

export default Modal;
