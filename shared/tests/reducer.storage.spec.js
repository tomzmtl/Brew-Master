import expect from 'expect';
import storeBeer from '../redux/reducers/reducer';
import deepFreeze from 'deep-freeze';
import * as ActionTypes from '../redux/constants/actionTypes';
import * as gameConstants from '../redux/constants/gameConstants';

import mockStore from './_mocks/store';

describe('StorageUnit', () => {
  it('stores a beer', () => {
    const stateBefore = mockStore();
    const stateAfter = mockStore({ facility: { storage: 1 } });
    const action = { type: ActionTypes.STORE_BEER };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(stateAfter).toEqual(storeBeer(stateBefore, action));
  });

  it('doesn\'t go over the storage limit', () => {
    const stateBefore = mockStore({ facility: { storage: gameConstants.STORAGE_LIMIT } });
    const stateAfter = mockStore({ facility: { storage: gameConstants.STORAGE_LIMIT } });
    const action = { type: ActionTypes.STORE_BEER };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(stateAfter).toEqual(storeBeer(stateBefore, action));
  });
});
