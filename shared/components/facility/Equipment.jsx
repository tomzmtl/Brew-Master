import React from 'react';
import { produceBeer } from '../../redux/actions/actions';

const Equipment = ({ dispatch }) => {
  const onBtnClick = () => { dispatch(produceBeer()); };

  return (
    <div className="equipment">
      <span>Generic Facility Equipment</span>
      <br/>
      <button onClick={onBtnClick}>
        Produce beer!
      </button>
    </div>
  );
};

export default Equipment;
