import React from 'react';

const Equipment = ({ onBtnClick, btnDisabled }) => {
  const disabled = btnDisabled ? 'disabled' : '';
  const text = btnDisabled ? 'Storage full!' : 'Produce beer!';
  
  return (
    <div className="equipment">
      <div className="name">Generic Facility Equipment</div>
      <button onClick={onBtnClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default Equipment;
