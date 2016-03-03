import React, { PropTypes } from 'react';

const StorageUnit = ({ storage }) => (
  <div className="storage">
    <span>Storage Unit</span>
    <strong>{storage}</strong>
  </div>
);

StorageUnit.propTypes = {
  storage: PropTypes.number.isRequired,
};

export default StorageUnit;
