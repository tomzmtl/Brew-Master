import expect from 'expect';

import brew from '../../game/factories/beer';
import grain from '../../game/factories/grain';
import hops from '../../game/factories/hops';
import yeast from '../../game/factories/yeast';
import * as GAME from '../../constants/game';

describe('Beer Factory', () => {

  it('brews White Beer', () => {
    const g = grain('wheat', 30, 50);
    const h = hops(30);
    const y = yeast('a');
    const beer = brew(g, h, y);

    expect(beer.type).toBe(GAME.BEER.TYPE.WHITE);
  });

});
