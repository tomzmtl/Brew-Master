import expect from 'expect';
import reducer from '../redux/reducers/reducer';
import deepFreeze from 'deep-freeze';

import * as ACTIONS from '../redux/constants/actionTypes';
// import * as GAME from '../redux/constants/gameConstants';

import mockStore from './_mocks/store';
import mockInventoryItem from './_mocks/inventoryItem';

describe('Inventory', () => {

  it('receives a new item', () => {
    const stateBefore = mockStore();
    const stateAfter = mockStore({
      inventory: { items: [mockInventoryItem()] },
    });

    const action = {
      type: ACTIONS.ADD_INVENTORY_ITEM,
      item: mockInventoryItem(),
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });

  it('can\'t receive a new item if limit is reached', () => {

  });

});
