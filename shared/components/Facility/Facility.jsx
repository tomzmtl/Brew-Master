import React, { PropTypes } from 'react';
import * as GAME from '../../constants/gameConstants';
import { randomBeer } from '../../tests/_mocks/beer';

import Equipment from './Equipment';
import StorageUnit from './StorageUnit';

const Facility = (props) => {
  const equipmentProps = {
    onBtnClick: () => props.onEquipmentBtnClick(randomBeer()),
    btnDisabled: props.storage.length >= GAME.STORAGE_LIMIT,
  };

  const storageProps = {
    storage: props.storage,
  };

  return (
    <div className="facility">
      <Equipment {...equipmentProps} />
      <StorageUnit {...storageProps} />
    </div>
  );
};

Facility.propTypes = {
  onEquipmentBtnClick: PropTypes.func.isRequired,
  storage: PropTypes.array.isRequired,
};

export default Facility;
