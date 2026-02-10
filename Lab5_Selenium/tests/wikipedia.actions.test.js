const { Builder, By, until } = require('selenium-webdriver');

jest.setTimeout(30000);

test('Click, wait and CSS property test', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://en.wikipedia.org/wiki/Selenium');

    const link = await driver.findElement(By.linkText('Web browser'));
    await link.click();

    await driver.wait(until.titleContains('Web browser'), 10000);

    const url = await driver.getCurrentUrl();
    expect(url).toContain('Web_browser');

    const heading = await driver.findElement(By.id('firstHeading'));
    const color = await heading.getCssValue('color');

    expect(color).toBeDefined();
  } finally {
    await driver.quit();
  }
});
