import expect from 'expect';
import reducer from '../redux/reducers/reducer';
import deepFreeze from 'deep-freeze';

import * as ACTIONS from '../redux/constants/actionTypes';
import * as GAME from '../redux/constants/gameConstants';

import mockStore from './_mocks/store';

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
    const storage = 3;
    const stateBefore = mockStore({
      tick: 4,
      facility: { storage },
    });
    const stateAfter = mockStore({
      tick: 5,
      facility: {
        storage: 0,
      },
      wallet: GAME.BEER_PRICE * storage,
    });
    const action = { type: ACTIONS.INCREMENT_TICK };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });

  it('doesn\'t sell beer otherwise', () => {
    const storage = 3;
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
