const { Builder, By, Key } = require('selenium-webdriver');

jest.setTimeout(40000);

test('TC4: Login with incorrect credentials', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://automationexercise.com/');
    await driver.findElement(By.linkText('Signup / Login')).click();

    await driver.findElement(By.css('[data-qa="login-email"]'))
      .sendKeys('wrong@test.com');
    await driver.findElement(By.css('[data-qa="login-password"]'))
      .sendKeys('wrongpass', Key.ENTER);

    const error = await driver.findElement(By.xpath('//p[contains(text(),"incorrect")]'));
    expect(error).toBeDefined();
  } finally {
    await driver.quit();
  }
});
