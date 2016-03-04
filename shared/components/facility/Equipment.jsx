import React from 'react';

const Equipment = ({ onBtnClick }) => (
  <div className="equipment">
    <div className="name">Generic Facility Equipment</div>
    <button onClick={onBtnClick}>
      Produce beer!
    </button>
  </div>
);

export default Equipment;
