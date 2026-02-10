const { ApiHelper } = require('../labAssignment');

test('fetchViaHelper returns data from apiCallFunction', async () => {
  const mockApiCall = jest.fn().mockResolvedValue({ success: true });

  const helper = new ApiHelper(mockApiCall);
  const result = await helper.fetchViaHelper();

  expect(mockApiCall).toHaveBeenCalled();
  expect(result).toEqual({ success: true });
});
