import expect from 'expect';
import deepFreeze from 'deep-freeze';
import reducer from '../../reducers/reducer';

import * as ACTIONS from '../../constants/actionTypes';

import mockStore from '../_mocks/store';

describe('Modal', () => {

  it('closes', () => {
    const stateBefore = mockStore({
      modal: 'TestModal',
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

});
