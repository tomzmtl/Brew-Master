const state = {
  facility: {
    storage: [],
  },
  inventory: {
    items: [],
  },
  marketplace: {
    items: [
      {
        name: 'Marketplace item 1',
        price: 100,
      },
      {
        name: 'Marketplace item 2',
        price: 200,
      },
      {
        name: 'Marketplace item 3',
        price: 50,
      },
    ],
  },
  modal: null,
  tick: 1,
  wallet: 0,
};

export default state;
