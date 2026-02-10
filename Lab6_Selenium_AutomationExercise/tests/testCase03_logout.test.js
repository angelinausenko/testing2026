const { Builder, By } = require('selenium-webdriver');

jest.setTimeout(30000);

test('Test Case 3: Logout User', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://automationexercise.com/');
    await driver.findElement(By.linkText('Logout')).click();

    const loginBtn = await driver.findElement(By.linkText('Signup / Login'));
    expect(loginBtn).toBeDefined();
  } finally {
    await driver.quit();
  }
});
