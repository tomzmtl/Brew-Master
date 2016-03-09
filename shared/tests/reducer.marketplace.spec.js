import expect from 'expect';
import reducer from '../reducers/reducer';
import deepFreeze from 'deep-freeze';

import * as ACTIONS from '../constants/actionTypes';

import mockStore from './_mocks/store';

describe('Marketplace', () => {

  it('opens (modal)', () => {
    const modal = 'Marketplace';
    const stateBefore = mockStore();
    const stateAfter = mockStore({
      modal,
    });

    const action = {
      type: ACTIONS.OPEN_MODAL,
      modal,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });

  it('closes (modal)', () => {
    const modal = null;
    const stateBefore = mockStore({
      modal: 'Marketplace',
    });
    const stateAfter = mockStore({
      modal,
    });

    const action = {
      type: ACTIONS.CLOSE_MODAL,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });

});
