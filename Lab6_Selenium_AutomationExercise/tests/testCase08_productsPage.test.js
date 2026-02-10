const { Builder, By } = require('selenium-webdriver');

jest.setTimeout(30000);

test('TC8: Verify Products page', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://automationexercise.com/');
    await driver.findElement(By.linkText('Products')).click();

    const productsList = await driver.findElement(By.className('features_items'));
    expect(productsList).toBeDefined();
  } finally {
    await driver.quit();
  }
});
