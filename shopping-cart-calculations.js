function calculateTotalQuantity(cart) {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function calculateTotalPrice(cart) {
  return Number(
    cart.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2)
  );
}

module.exports = { calculateTotalPrice, calculateTotalQuantity };
