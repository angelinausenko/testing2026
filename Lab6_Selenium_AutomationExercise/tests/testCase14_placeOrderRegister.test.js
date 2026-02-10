const { Builder, By } = require('selenium-webdriver');

jest.setTimeout(40000);

test('TC14: Place order - Register during checkout', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://automationexercise.com/view_cart');
    await driver.findElement(By.linkText('Proceed To Checkout')).click();

    const registerBtn = await driver.findElement(By.linkText('Register / Login'));
    expect(registerBtn).toBeDefined();
  } finally {
    await driver.quit();
  }
});
