const { Builder, By, Key } = require('selenium-webdriver');

jest.setTimeout(40000);

test('Test Case 1: Register User', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://automationexercise.com/');
    await driver.findElement(By.linkText('Signup / Login')).click();

    await driver.findElement(By.name('name')).sendKeys('Angelina');
    await driver.findElement(By.css('input[data-qa="signup-email"]'))
      .sendKeys(`angelina${Date.now()}@test.com`, Key.ENTER);

    const accountInfo = await driver.findElement(By.xpath('//b[text()="Enter Account Information"]'));
    expect(accountInfo).toBeDefined();
  } finally {
    await driver.quit();
  }
});
