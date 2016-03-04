import React, { PropTypes } from 'react';

const StorageUnit = ({ storage }) => (
  <div className="storage equipment">
    <div className="name">Storage Unit</div>
    <strong>{storage}</strong>
  </div>
);

StorageUnit.propTypes = {
  storage: PropTypes.number.isRequired,
};

export default StorageUnit;
