import { assign } from 'lodash';

import * as GAME from '../../constants/game';

function setType(grain, hops, yeast) {
  if (grain.type === 'wheat' && hops && yeast) {
    return GAME.BEER.TYPE.WHITE;
  }
  if (grain.roast <= 25) {
    return GAME.BEER.TYPE.PALE_ALE;
  }
  if (grain.roast <= 50) {
    return GAME.BEER.TYPE.RED_ALE;
  }
  if (grain.roast <= 75) {
    return GAME.BEER.TYPE.BROWN_ALE;
  }
  if (grain.roast <= 100) {
    return GAME.BEER.TYPE.STOUT;
  }
  return GAME.BEER.TYPE.INVALID;
}

function setColor(type) {
  return GAME.BEER.COLOR[type];
}

function setStrength(grain) {
  return (GAME.BEER.MAX_STRENGTH / 100) * grain.sugar;
}

function setIbu(hops) {
  return (GAME.BEER.MAX_IBU / 100) * hops.bitterness;
}


const brew = (grain, hops, yeast) => {
  const props = {};
  props.type = setType(grain, hops, yeast);
  props.color = setColor(props.type);
  props.strength = setStrength(grain);
  props.ibu = setIbu(hops);

  return assign({}, props);
};

export default brew;
