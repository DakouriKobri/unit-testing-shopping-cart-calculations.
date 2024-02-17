// Local Files
const {
  calculateTotalPrice,
  calculateTotalQuantity,
} = require('../shopping-cart-calculations');

describe('calculateTotalQuantity', () => {
  it('calculates total items quantity', () => {
    const cart = [
      { item: 'ginger juice', price: 4.99, quantity: 3 },
      { item: 'apple juice', price: 9.99, quantity: 10 },
    ];
    const totalQuantity = calculateTotalQuantity(cart);
    expect(totalQuantity).toBe(13);
  });
});

describe('calculateTotalPrice', () => {
  it('calculates total price without discount', () => {
    const cart = [
      { item: 'ginger juice', price: 4.99, quantity: 3 },
      { item: 'apple juice', price: 9.99, quantity: 10 },
    ];
    const totalPrice = calculateTotalPrice(cart);
    expect(totalPrice).toBe(114.87);
  });
});
