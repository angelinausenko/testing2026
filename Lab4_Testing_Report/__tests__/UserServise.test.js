const { UserService } = require('../labAssignment');

test('greet() calls getFullName and returns greeting in upper case', () => {
  const getFullNameMock = jest.fn().mockReturnValue('John Doe');
  const service = new UserService(getFullNameMock);

  const result = service.greet('John', 'Doe');

  expect(getFullNameMock).toHaveBeenCalledWith('John', 'Doe');
  expect(result).toBe('HELLO, JOHN DOE!');
});
