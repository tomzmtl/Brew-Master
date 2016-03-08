const item = { name: 'Mocked inventory item' };

const mockInventoryItem = () => Object.assign({}, item);

const mockInventoryItemSet = (count) => {
  const set = [];
  for (let i = 0; i < count; i++) {
    set.push(Object.assign({}, item));
  }
  return set;
};

export {
  mockInventoryItem,
  mockInventoryItemSet,
};
