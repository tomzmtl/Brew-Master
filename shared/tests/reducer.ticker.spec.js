import expect from 'expect';
import addTick from '../redux/reducers/reducer';
import deepFreeze from 'deep-freeze';
import * as ActionTypes from '../redux/constants/actionTypes';

import mockStore from './_mocks/store';

describe('Ticker', () => {
  it('increments', () => {
    const stateBefore = mockStore();
    const stateAfter = mockStore({ tick: 2 });
    const action = { type: ActionTypes.INCREMENT_TICK };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(stateAfter).toEqual(addTick(stateBefore, action));
  });
});
