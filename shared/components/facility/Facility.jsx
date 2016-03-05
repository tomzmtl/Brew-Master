import React, { PropTypes } from 'react';
import * as gameConstants from '../../redux/constants/gameConstants';

import Equipment from './Equipment';
import StorageUnit from './StorageUnit';

const Facility = (props) => {
  const equipmentProps = {
    onBtnClick: props.onEquipmentBtnClick,
    btnDisabled: props.storage >= gameConstants.STORAGE_LIMIT,
  };

  const storageProps = {
    storage: props.storage,
    onBtnClick: () => props.onSellBtnClick(props.storage),
  };

  return (
    <div className="facility">
      <Equipment {...equipmentProps} />
      <StorageUnit {...storageProps} />
    </div>
  );
};

Facility.propTypes = {
  onSellBtnClick: PropTypes.func.isRequired,
  onEquipmentBtnClick: PropTypes.func.isRequired,
  storage: PropTypes.number.isRequired,
};

export default Facility;
