const { Builder, By, Key } = require('selenium-webdriver');

jest.setTimeout(40000);

test('TC13: Verify product quantity in cart', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://automationexercise.com/product_details/1');

    const quantity = await driver.findElement(By.id('quantity'));
    await quantity.clear();
    await quantity.sendKeys('4');

    await driver.findElement(By.xpath('//button[contains(text(),"Add to cart")]')).click();
    await driver.findElement(By.linkText('View Cart')).click();

    const qtyText = await driver.findElement(By.className('cart_quantity_input'))
      .getAttribute('value');

    expect(qtyText).toBe('4');
  } finally {
    await driver.quit();
  }
});
