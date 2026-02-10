const { asyncHello, asyncError } = require('../labAssignment');

test('asyncHello resolves "hello world"', async () => {
  await expect(asyncHello()).resolves.toBe('hello world');
});

test('asyncError rejects with correct error message', async () => {
  await expect(asyncError()).rejects.toThrow('Something went wrong');
});
