function calculateTotalQuantity(cart) {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function calculateTotalPrice(cart, discount = 0) {
  return Number(
    cart
      .reduce(
        (sum, item) => sum + item.quantity * item.price * (1 - discount),
        0
      )
      .toFixed(2)
  );
}

module.exports = { calculateTotalPrice, calculateTotalQuantity };
