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

  it('calculates total price with discount', () => {
    const cart = [
      { item: 'ginger juice', price: 4.99, quantity: 3 },
      { item: 'apple juice', price: 9.99, quantity: 10 },
    ];
    const discount = 0.5;
    const totalPrice = calculateTotalPrice(cart, discount);
    expect(totalPrice).toBe(57.44);
  });

  it('handles empty cart', () => {
    const total = calculateTotalPrice([]);
    expect(total).toBe(0);
  });
});
