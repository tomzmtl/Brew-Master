import expect from 'expect';
import deepFreeze from 'deep-freeze';
import reducer from '../../reducers/reducer';

import * as ACTIONS from '../../constants/actionTypes';
import * as GAME from '../../constants/gameConstants';
import * as MODALS from '../../constants/modals';

import mockStore from '../_mocks/store';
import { mockInventoryItemSet } from '../_mocks/inventoryItem';

describe('Marketplace', () => {

  it('opens', () => {
    const stateBefore = mockStore({
      marketplace: {
        items: [],
      },
    });
    const stateAfter = mockStore({
      modal: MODALS.MARKETPLACE,
      marketplace: {
        items: [],
      },
    });

    const action = {
      type: ACTIONS.OPEN_MARKETPLACE_MODAL,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });

  it('closes', () => {
    const stateBefore = mockStore({
      modal: MODALS.MARKETPLACE,
    });
    const stateAfter = mockStore({
      modal: null,
    });

    const action = {
      type: ACTIONS.CLOSE_MODAL,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });

  it('is populated when opened for the first time', () => {
    const items = mockInventoryItemSet(GAME.MARKETPLACE_ITEMS_LIMIT);
    const stateBefore = mockStore();
    const stateAfter = mockStore({
      modal: MODALS.MARKETPLACE,
      marketplace: {
        items,
      },
    });

    const action = {
      type: ACTIONS.OPEN_MARKETPLACE_MODAL,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    const result = reducer(stateBefore, action).marketplace;

    expect(stateAfter.marketplace.items.length)
      .toEqual(result.items.length);

    result.items.forEach((item) => {
      expect(item.name).toBeA('string');
      expect(item.price).toBeA('number');
    });
  });

  it('sells a marketplace item', () => {
    const items = mockInventoryItemSet(1);
    const stateBefore = mockStore({
      marketplace: {
        items,
      },
      wallet: items[0].price,
    });
    const stateAfter = mockStore({
      marketplace: {
        items: [],
      },
      inventory: {
        items,
      },
      wallet: 0,
    });

    const action = {
      type: ACTIONS.BUY_MARKETPLACE_ITEM,
      item: 0,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });

  it('can\'t sell an item that\'s too expensive', () => {
    const items = mockInventoryItemSet(1);
    items[0].price = 200;
    const stateBefore = mockStore({
      marketplace: {
        items,
      },
      wallet: 100,
    });
    const stateAfter = mockStore({
      marketplace: {
        items,
      },
      wallet: 100,
    });

    const action = {
      type: ACTIONS.BUY_MARKETPLACE_ITEM,
      item: 0,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });

});
