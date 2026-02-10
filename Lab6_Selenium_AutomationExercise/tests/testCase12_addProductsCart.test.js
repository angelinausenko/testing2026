const { Builder, By } = require('selenium-webdriver');

jest.setTimeout(40000);

test('TC12: Add products to cart', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://automationexercise.com/products');

    await driver.findElement(By.xpath('(//a[text()="Add to cart"])[1]')).click();
    await driver.findElement(By.xpath('//button[text()="Continue Shopping"]')).click();

    await driver.findElement(By.linkText('Cart')).click();
    const cart = await driver.findElement(By.id('cart_info'));
    expect(cart).toBeDefined();
  } finally {
    await driver.quit();
  }
});
