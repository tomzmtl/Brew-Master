import expect from 'expect';
import deepFreeze from 'deep-freeze';
import reducer from '../../reducers/reducer';

import * as ACTIONS from '../../constants/actionTypes';
import * as GAME from '../../constants/gameConstants';

import mockStore from '../_mocks/store';
import { mockBeer, mockBeerSet } from '../_mocks/beer';

describe('StorageUnit', () => {

  it('stores a beer', () => {
    const beer = mockBeer();
    const stateBefore = mockStore();
    const stateAfter = mockStore({
      facility: { storage: [beer] },
    });

    const action = {
      type: ACTIONS.STORE_BEER,
      beer,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });

  it('doesn\'t go over the storage limit', () => {
    const storage = mockBeerSet(GAME.STORAGE_LIMIT);
    const stateBefore = mockStore({
      facility: { storage },
    });
    const stateAfter = mockStore({
      facility: { storage },
    });

    const action = { type: ACTIONS.STORE_BEER };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });

  it('sells all beer', () => {
    const storage = mockBeerSet(3);
    const stateBefore = mockStore({
      facility: { storage },
    });
    const stateAfter = mockStore({
      facility: {
        storage: [],
      },
      wallet: storage.length * GAME.BEER_PRICE,
    });

    const action = {
      type: ACTIONS.SELL_BEER,
      quantity: storage.length,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });

});
