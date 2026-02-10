const { Builder, By, Key } = require('selenium-webdriver');

jest.setTimeout(30000);

test('TC10: Verify subscription on home page', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://automationexercise.com/');

    await driver.findElement(By.id('susbscribe_email'))
      .sendKeys('angelina@test.com', Key.ENTER);

    const success = await driver.findElement(By.id('success-subscribe'));
    expect(success).toBeDefined();
  } finally {
    await driver.quit();
  }
});
