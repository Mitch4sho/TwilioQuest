function scanAndFilter(freightItems, forbiddenString) {

  let filteredItems = freightItems;

  let scanItems = filteredItems.filter(freightItem => freightItem != forbiddenString);
  return scanItems;
};

const filtered = scanAndFilter(
  ['dog', 'ray gun', 'cat', 'zippers', 'ray gun'],
  'ray gun'
);
console.log(filtered);