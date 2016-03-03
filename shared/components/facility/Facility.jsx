import React from 'react';

import Equipment from './Equipment';
import StorageUnit from './StorageUnit';

const Facility = ({ storage, onEquipmentBtnClick }) => (
  <div className="facility">
    <Equipment onEquipmentBtnClick={onEquipmentBtnClick} />
    <StorageUnit storage={storage} />
  </div>
);

export default Facility;
