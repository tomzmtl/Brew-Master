import expect from 'expect';
import deepFreeze from 'deep-freeze';
import reducer from '../../reducers/reducer';

import * as ACTIONS from '../../constants/actionTypes';
import * as GAME from '../../constants/gameConstants';

import mockStore from '../_mocks/store';
import { mockBeerSet } from '../_mocks/beer';

describe('Ticker', () => {

  it('increments', () => {
    const stateBefore = mockStore();
    const stateAfter = mockStore({ tick: 2 });

    const action = { type: ACTIONS.INCREMENT_TICK };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });

  it('sells all beer on appropriate interval', () => {
    const storage = mockBeerSet(3);
    const stateBefore = mockStore({
      tick: 4,
      facility: { storage },
    });
    const stateAfter = mockStore({
      tick: 5,
      facility: {
        storage: [],
      },
      wallet: storage.length * GAME.BEER_PRICE,
    });

    const action = { type: ACTIONS.INCREMENT_TICK };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });

  it('doesn\'t sell beer otherwise', () => {
    const storage = mockBeerSet(3);
    const wallet = 100;
    const stateBefore = mockStore({
      tick: 5,
      facility: { storage },
      wallet,
    });
    const stateAfter = mockStore({
      tick: 6,
      facility: { storage },
      wallet,
    });

    const action = { type: ACTIONS.INCREMENT_TICK };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });
});
