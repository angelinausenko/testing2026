const { ApiClient } = require('../labAssignment');

global.fetch = jest.fn();

test('fetchData returns fetched JSON with fetchedAt field', async () => {
  const mockData = { id: 1, name: 'test' };

  fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData)
  });

  const client = new ApiClient();
  const result = await client.fetchData('https://example.com');

  expect(result).toMatchObject(mockData);
  expect(typeof result.fetchedAt).toBe('number');
});
