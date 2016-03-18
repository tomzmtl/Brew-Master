import React, { PropTypes } from 'react';
import * as GAME from '../../constants/gameConstants';

function _populateItems(propItems) {
  const items = [];

  for (let i = 1; i <= GAME.INVENTORY_LIMIT; i++) {
    let content = null;
    const item = propItems[i - 1];

    if (propItems.length >= i) {
      content = (<div>{item.name}</div>);
    }

    items.push((<li className="item" key={i}>{content}</li>));
  }
  return items;
}

const Inventory = (props) => {
  const items = _populateItems(props.items);

  return (
    <div className="inventory">
      <ul className="items">{items}</ul>
    </div>
  );
};

Inventory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Inventory;
