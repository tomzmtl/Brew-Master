import React from 'react';

const Marketplace = (props) => {
  return (
    <div className="modal">
      <h1>Marketplace</h1>
      <div onClick={props.onCloseClick}>CLOSE</div>
    </div>
  );
};

export default Marketplace;
