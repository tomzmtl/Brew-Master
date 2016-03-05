import React from 'react';

const Equipment = (props) => {
  const btn = {
    props: {
      disabled: props.btnDisabled,
      onClick: props.onBtnClick,
    },
    text: props.btnDisabled ? 'Storage full!' : 'Produce beer!',
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
