// labAssignment.js

// ===== Task 1 =====
class UserService {
  constructor(getFullName) {
    this.getFullName = getFullName;
  }

  greet(firstName, lastName) {
    const fullName = this.getFullName(firstName, lastName);
    return `HELLO, ${fullName}!`.toUpperCase();
  }
}

// ===== Task 2 =====
async function asyncHello() {
  return 'hello world';
}

// ===== Task 4 =====
async function asyncError() {
  throw new Error('Something went wrong');
}

// ===== Task 3 =====
function computeValue() {
  return 94;
}

// ===== Task 5 =====
class ApiClient {
  async fetchData() {
    const response = await fetch();
    const data = await response.json();
    return {
      ...data,
      fetchedAt: Date.now()
    };
  }
}

// ===== Task 6 =====
class ApiHelper {
  async fetchViaHelper(apiCallFunction) {
    return await apiCallFunction();
  }
}

// ===== Task 7 =====
function calculateFinalPrice(order) {
  if (
    !order ||
    !Array.isArray(order.items) ||
    order.items.length === 0
  ) {
    throw new Error('Invalid order');
  }

  let total = 0;

  for (const item of order.items) {
    if (item.price < 0 || item.quantity < 0) {
      throw new Error('Invalid item');
    }
    total += item.price * item.quantity;
  }

  let discount = order.discount || 0;
  if (discount > 0.5) discount = 0.5;

  total = total * (1 - discount);

  total = total * (1 + (order.tax || 0));

  return Math.round(total);
}

// ===== Task 8 =====
class OrderProcessor {
  constructor(converter) {
    this.converter = converter;
  }

  processOrder(price) {
    try {
      return this.converter(price);
    } catch (e) {
      return price;
    }
  }
}

module.exports = {
  UserService,
  asyncHello,
  asyncError,
  computeValue,
  ApiClient,
  ApiHelper,
  calculateFinalPrice,
  OrderProcessor
};
