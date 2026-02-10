const { Builder, By, Key } = require('selenium-webdriver');

jest.setTimeout(30000);

test('TC9: Search product', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://automationexercise.com/products');

    await driver.findElement(By.id('search_product')).sendKeys('Dress');
    await driver.findElement(By.id('submit_search')).click();

    const searched = await driver.findElement(By.xpath('//h2[text()="Searched Products"]'));
    expect(searched).toBeDefined();
  } finally {
    await driver.quit();
  }
});
