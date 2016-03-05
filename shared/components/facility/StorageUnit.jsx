import React, { PropTypes } from 'react';
import * as GAME from '../../redux/constants/gameConstants';

function _buildStorageItems(count) {
  const items = [];
  for (let i = 1; i <= GAME.STORAGE_LIMIT; i++) {
    const className = count >= i ? 'full' : null;
    items.push((<li className={className} key={i}></li>));
  }
  return items;
}

const StorageUnit = (props) => {
  const items = _buildStorageItems(props.storage);
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
