import React from 'react';

const Equipment = ({ onBtnClick }) => (
  <div className="equipment">
    <span>Generic Facility Equipment</span>
    <br/>
    <button onClick={onBtnClick}>
      Produce beer!
    </button>
  </div>
);

export default Equipment;
