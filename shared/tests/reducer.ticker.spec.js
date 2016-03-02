import expect from 'expect';
import addTick from '../redux/reducers/reducer';
import deepFreeze from 'deep-freeze';
import * as ActionTypes from '../redux/constants/constants';

describe('reducer tests', () => {
  it('action INCREMENT_TICK is working', () => {
    const stateBefore = { tick: 0 };
    const stateAfter = { tick: 1 };
    const action = { type: ActionTypes.INCREMENT_TICK };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(stateAfter).toEqual(addTick(stateBefore, action));
  });
});
