import deepFreeze from 'deep-freeze';


/* General -----------------------  */

export const STORAGE_LIMIT = 6;
export const SALE_INTERVAL = 5;
export const INVENTORY_LIMIT = 5;
export const MARKETPLACE_ITEMS_LIMIT = 5;


/* Beer -----------------------  */

export const BEER = deepFreeze({
  PRICE: 10,
  MAX_STRENGTH: 12,
  MAX_IBU: 120,
  TYPE: {
    WHITE: 'BEER_TYPE_WHITE',
    PALE_ALE: 'BEER_TYPE_PALE_ALE',
    RED_ALE: 'BEER_TYPE_RED_ALE',
    BROWN_ALE: 'BEER_TYPE_BROWN_ALE',
    STOUT: 'BEER_TYPE_STOUT',
    INVALID: 'BEER_TYPE_INVALID',
  },
  COLOR: {
    WHITE: [240, 236, 185],
    PALE_ALE: [221, 143, 28],
    RED_ALE: [85, 36, 11],
    BROWN_ALE: [84, 51, 16],
    STOUT: [24, 15, 2],
    INVALID: [142, 2, 177],
  },
});


/* Grain -----------------------  */

export const GRAIN = deepFreeze({
  TYPE: {
    BARLEY: 'GRAIN_TYPE_BARLEY',
    WHEAT: 'GRAIN_TYPE_WHEAT',
    OATS: 'GRAIN_TYPE_OATS',
  },
});


/* Yeast -----------------------  */

export const YEAST = deepFreeze({
  TYPE: {
    ALE: 'YEAST_TYPE_ALE',
    LAGER: 'YEAST_TYPE_LAGER',
    WHEAT: 'YEAST_TYPE_WHEAT',
  },
});
