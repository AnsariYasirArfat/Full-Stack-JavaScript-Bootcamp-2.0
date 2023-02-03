const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Adding 'Meat' in the beginning of your shopping cart.
if (shoppingCart.indexOf('Meat') === -1) {
  shoppingCart.unshift('Meat');
};

// Addind Sugar at the end of your shopping cart.
if (shoppingCart.indexOf('Sugar') === -1) {
  shoppingCart.push('Sugar');
};

// Removeing 'Honey'
const honey = shoppingCart.indexOf('Honey');
if (honey !== -1) {
  shoppingCart.splice(honey, 1);
};
// Modifying Tea to 'Green Tea'
const tea = shoppingCart.indexOf('Tea');
if (tea !== -1) {
  shoppingCart[tea] = 'Green Tea';
};

console.log(shoppingCart);

