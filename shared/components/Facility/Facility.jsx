import React, { PropTypes } from 'react';
import * as gameConstants from '../../redux/constants/gameConstants';
import beerFactory from '../../../game/models/beer';

import Equipment from './Equipment';
import StorageUnit from './StorageUnit';

const Facility = (props) => {
  const equipmentProps = {
    onBtnClick: () => props.onEquipmentBtnClick(beerFactory('Test Ale', 'yellow', 5, 30)),
    btnDisabled: props.storage.length >= gameConstants.STORAGE_LIMIT,
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
