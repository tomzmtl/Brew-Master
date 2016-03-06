import React from 'react';
import * as GAME from '../../redux/constants/gameConstants';

function _buildStorageItems(storage) {
  const items = [];
  for (let i = 1; i <= GAME.STORAGE_LIMIT; i++) {
    const className = storage.length >= i ? 'full' : null;
    items.push((<li className={className} key={i}></li>));
  }
  return items;
}

const StorageUnit = (props) => {
  const items = _buildStorageItems(props.storage);

  return (
    <div className="storage equipment">
      <div className="name">Storage Unit</div>
      <ul>{items}</ul>
    </div>
  );
};

export default StorageUnit;
