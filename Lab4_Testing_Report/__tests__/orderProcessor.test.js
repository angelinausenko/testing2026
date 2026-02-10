const { OrderProcessor } = require('../labAssignment');

test('processOrder converts price using converter', () => {
  const converterMock = jest.fn().mockReturnValue(120);

  const processor = new OrderProcessor(converterMock);
  const result = processor.processOrder({ total: 100 });

  expect(converterMock).toHaveBeenCalled();
  expect(result).toBe(120);
});

test('returns original price if converter throws error', () => {
  const converterMock = jest.fn(() => {
    throw new Error('Conversion failed');
  });

  const processor = new OrderProcessor(converterMock);
  const result = processor.processOrder({ total: 100 });

  expect(result).toBe(100);
});
