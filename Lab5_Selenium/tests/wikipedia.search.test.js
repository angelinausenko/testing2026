const { Builder, By, Key, until } = require('selenium-webdriver');

jest.setTimeout(30000);

test('Search Selenium on Wikipedia', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.wikipedia.org');

    const searchInput = await driver.findElement(By.id('searchInput'));
    await searchInput.sendKeys('Selenium', Key.ENTER);

    await driver.wait(until.titleContains('Selenium'), 10000);

    const title = await driver.getTitle();
    expect(title).toContain('Selenium');
  } finally {
    await driver.quit();
  }
});
