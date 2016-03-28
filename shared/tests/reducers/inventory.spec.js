import expect from 'expect';
import deepFreeze from 'deep-freeze';
import reducer from '../../reducers/reducer';

import * as ACTIONS from '../../constants/actionTypes';
import * as GAME from '../../constants/gameConstants';

import mockStore from '../_mocks/store';
import { mockInventoryItemSet } from '../_mocks/inventoryItem';

describe('Inventory', () => {

/*
  it('receives a new item', () => {
    const stateBefore = mockStore();
    const stateAfter = mockStore({
      inventory: { items: mockInventoryItemSet(1) },
    });

    const action = {
      type: ACTIONS.ADD_INVENTORY_ITEM,
      item: mockInventoryItem(),
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });
*/

  it('can\'t receive a new item if limit is reached', () => {
    const marketplaceItems = mockInventoryItemSet(1);
    const inventoryItems = mockInventoryItemSet(GAME.INVENTORY_LIMIT);
    const stateBefore = mockStore({
      inventory: { items: inventoryItems },
      marketplace: { marketplaceItems },
    });

    const action = {
      type: ACTIONS.BUY_MARKETPLACE_ITEM,
      item: 0,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    const stateAfter = reducer(stateBefore, action);

    expect(stateAfter.inventory.items.length).toEqual(GAME.INVENTORY_LIMIT);
  });

});
