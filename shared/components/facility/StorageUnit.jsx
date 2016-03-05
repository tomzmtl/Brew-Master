import React, { PropTypes } from 'react';
import * as gameConstants from '../../redux/constants/gameConstants';

const StorageUnit = (props) => {
  const items = [];
  for (let i = 1; i <= gameConstants.STORAGE_LIMIT; i++) {
    const className = props.storage >= i ? 'full' : 'empty';
    items.push((<li className={className} key={i}></li>));
  }
  const btnDisabled = props.storage === 0;

  return (
    <div className="storage equipment">
      <div className="name">Storage Unit</div>
      <ul>{items}</ul>
      <button disabled={btnDisabled} onClick={props.onBtnClick}>Sell!</button>
    </div>
  );
};

StorageUnit.propTypes = {
  storage: PropTypes.number.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default StorageUnit;
