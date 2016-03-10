
function generateItem() {
  return {
    name: 'Marketplace item',
    price: 100,
  };
}

const generate = (amount) => {
  const items = [];

  for (let i = 0; i < amount; i++) {
    items.push(generateItem());
  }

  return items;
};

export default generate;
