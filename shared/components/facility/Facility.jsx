import React from 'react';
import * as gameConstants from '../../redux/constants/gameConstants';

import Equipment from './Equipment';
import StorageUnit from './StorageUnit';

const Facility = ({ storage, onEquipmentBtnClick }) => {
  const equipmentProps = {
    onBtnClick: onEquipmentBtnClick,
    btnDisabled: storage >= gameConstants.STORAGE_LIMIT,
  };

  return (
    <div className="facility">
      <Equipment {...equipmentProps} />
      <StorageUnit storage={storage} />
    </div>
  );
};

export default Facility;
