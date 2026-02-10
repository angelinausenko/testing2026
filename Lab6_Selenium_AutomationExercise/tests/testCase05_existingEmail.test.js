const { Builder, By, Key } = require('selenium-webdriver');

jest.setTimeout(40000);

test('TC5: Register with existing email', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://automationexercise.com/');
    await driver.findElement(By.linkText('Signup / Login')).click();

    await driver.findElement(By.name('name')).sendKeys('Angelina');
    await driver.findElement(By.css('[data-qa="signup-email"]'))
      .sendKeys('test@test.com', Key.ENTER);

    const error = await driver.findElement(By.xpath('//p[contains(text(),"already exist")]'));
    expect(error).toBeDefined();
  } finally {
    await driver.quit();
  }
});
