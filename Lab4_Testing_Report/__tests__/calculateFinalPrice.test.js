const { calculateFinalPrice } = require('../labAssignment');

test('calculates final price for valid order', () => {
  const order = {
    items: [
      { price: 100, quantity: 1 },
      { price: 50, quantity: 2 }
    ],
    discount: 60, // should be capped to 50%
    tax: 0.2
  };

  const result = calculateFinalPrice(order);
  expect(result).toBeGreaterThan(0);
});

test('throws error for invalid order', () => {
  expect(() =>
    calculateFinalPrice({ items: [] })
  ).toThrow();
});
