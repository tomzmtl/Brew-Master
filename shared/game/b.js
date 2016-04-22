
/*
module B {
  type: null,
  ibu: null,
  s: null,
  c: null,
}

factoryB (g, h, y) {

  let type, c, s, ibu;

  type = getType(g.m, g.r, h.qty.length);
  s = getS(g.s);
  c = getC(g.r);
  ibu = getIbu(h.qty[0], h.qty.length, h.b);

  return Object.create(Object.assign(B, {type, ibu, s, c});
}


getS(s) {
  return s * 12;
}

getType(m, r, h) {
  if (g.main === 'w') {
    return 'w';
  }

  if (h > 2) {
    type = 'i';
  }

  if (r < 0.25) {
    return 'p';
  }

  if (r < 0.5) {
    return 'r';
  }

  if (r < 0.75) {
    return 'b';
  }

  return 's';
}

getC(r) {
  return r * 100;
}

getIbu(hs, ht, b) {
  const MIN_IBU_VALUE = 5;
  const MAX_IBU_VALUE = 120;
  const MAX_HOP_INITIAL = 3;
  const MAX_HOP_TOTAL = 9;

  let ibu = Math.ceil((MAX_HOP_INITIAL / hs) *
                      (MAX_HOP_TOTAL / ht) *
                       MAX_IBU_VALUE * b);

  if (ibu < MIN_IBU_VALUE) {
    ibu = MIN_IBU_VALUE;
  }

  return ibu;
}
*/
