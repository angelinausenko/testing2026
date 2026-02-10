const { Builder, By } = require('selenium-webdriver');

jest.setTimeout(30000);

test('Wikipedia main page elements are present', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.wikipedia.org');

    const searchInput = await driver.findElement(By.id('searchInput'));
    const logo = await driver.findElement(By.css('div.central-featured-logo'));

    expect(searchInput).toBeDefined();
    expect(logo).toBeDefined();
  } finally {
    await driver.quit();
  }
});
