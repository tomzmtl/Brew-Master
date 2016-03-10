const item = { name: 'Mocked inventory item', price: 100 };

const mockInventoryItem = () => Object.assign({}, item);

const mockInventoryItemSet = (count) => {
  const set = [];
  for (let i = 0; i < count; i++) {
    set.push(mockInventoryItem());
  }
  return set;
};

export {
  mockInventoryItem,
  mockInventoryItemSet,
};
