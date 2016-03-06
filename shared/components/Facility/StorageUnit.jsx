import React from 'react';
import * as GAME from '../../redux/constants/gameConstants';

function _buildStorageItems(storage) {
  const items = [];
  for (let i = 1; i <= GAME.STORAGE_LIMIT; i++) {
    let className = null;
    const style = {};
    if (storage.length >= i) {
      className = 'full';
      style.backgroundColor = storage[i - 1].color;
    }
    items.push((<li className={className} style={style} key={i}></li>));
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
