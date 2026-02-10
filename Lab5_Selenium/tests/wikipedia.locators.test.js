const { Builder, By } = require('selenium-webdriver');

jest.setTimeout(30000);

test('Wikipedia article locators test', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://en.wikipedia.org/wiki/Selenium');

    const heading = await driver.findElement(By.xpath('//h1'));
    const headingText = await heading.getText();

    expect(headingText).toBe('Selenium');

    const navLinks = await driver.findElements(By.css('#mw-panel a'));
    const firstLink = await navLinks[0].getAttribute('href');

    expect(firstLink).toContain('wikipedia.org');

    const searchBox = await driver.findElement(By.name('search'));
    expect(searchBox).toBeDefined();
  } finally {
    await driver.quit();
  }
});
