// Local Files
const {
  calculateTotalPrice,
  calculateTotalQuantity,
} = require('../shopping-cart-calculations');

const cart = [
  { item: 'ginger juice', price: 4.99, quantity: 3 },
  { item: 'apple juice', price: 9.99, quantity: 10 },
];

describe('calculateTotalQuantity', () => {
  it('calculates total items quantity', () => {
    const expected = 13;
    const totalQuantity = calculateTotalQuantity(cart);
    expect(totalQuantity).toBe(expected);
  });
});

describe('calculateTotalPrice', () => {
  it('calculates total price without discount', () => {
    const expected = 114.87;
    const totalPrice = calculateTotalPrice(cart);
    expect(totalPrice).toBe(expected);
  });

  it('calculates total price with discount', () => {
    const expected = 57.44;
    const discount = 0.5;
    const totalPrice = calculateTotalPrice(cart, discount);
    expect(totalPrice).toBe(expected);
  });

  it('handles empty cart', () => {
    const expected = 0;
    const total = calculateTotalPrice([]);
    expect(total).toBe(expected);
  });
});
