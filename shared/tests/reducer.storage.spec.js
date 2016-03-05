import expect from 'expect';
import reducer from '../redux/reducers/reducer';
import deepFreeze from 'deep-freeze';
import * as ACTIONS from '../redux/constants/actionTypes';
import * as GAME from '../redux/constants/gameConstants';

import mockStore from './_mocks/store';

describe('StorageUnit', () => {
  it('stores a beer', () => {
    const stateBefore = mockStore();
    const stateAfter = mockStore({
      facility: { storage: 1 },
    });
    const action = { type: ACTIONS.STORE_BEER };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });

  it('doesn\'t go over the storage limit', () => {
    const stateBefore = mockStore({
      facility: { storage: GAME.STORAGE_LIMIT },
    });
    const stateAfter = mockStore({
      facility: { storage: GAME.STORAGE_LIMIT },
    });
    const action = { type: ACTIONS.STORE_BEER };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });

  it('sells all beer', () => {
    const storage = 3;
    const stateBefore = mockStore({
      facility: { storage },
    });
    const stateAfter = mockStore({
      facility: {
        storage: 0,
      },
      wallet: storage * GAME.BEER_PRICE,
    });
    const action = { type: ACTIONS.SELL_BEER, quantity: storage };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });
});
