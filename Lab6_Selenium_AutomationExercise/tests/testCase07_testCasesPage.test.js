const { Builder, By } = require('selenium-webdriver');

jest.setTimeout(30000);

test('TC7: Verify Test Cases page', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://automationexercise.com/');
    await driver.findElement(By.linkText('Test Cases')).click();

    const title = await driver.getTitle();
    expect(title).toContain('Test Cases');
  } finally {
    await driver.quit();
  }
});
