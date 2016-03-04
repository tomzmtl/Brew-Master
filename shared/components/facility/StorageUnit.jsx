import React, { PropTypes } from 'react';
import * as gameConstants from '../../redux/constants/gameConstants';

const StorageUnit = ({ storage }) => {
  const items = [];
  for (let i = 1; i <= gameConstants.STORAGE_LIMIT; i++) {
    const className = storage >= i ? 'full' : 'empty';
    items.push((<li className={className} key={i}></li>));
  }
  return (
    <div className="storage equipment">
      <div className="name">Storage Unit</div>
      <ul>{items}</ul>
    </div>
  );
};

StorageUnit.propTypes = {
  storage: PropTypes.number.isRequired,
};

export default StorageUnit;
