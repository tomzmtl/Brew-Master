import React from 'react';

const Equipment = ({ onBtnClick, btnDisabled }) => {
  const btn = {
    props: {
      disabled: btnDisabled,
      onClick: onBtnClick,
    },
    text: btnDisabled ? 'Storage full!' : 'Produce beer!',
  };

  return (
    <div className="equipment">
      <div className="name">Generic Facility Equipment</div>
      <button {...btn.props}>
        {btn.text}
      </button>
    </div>
  );
};

export default Equipment;
