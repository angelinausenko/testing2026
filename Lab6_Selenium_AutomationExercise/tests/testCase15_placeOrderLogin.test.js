const { Builder, By } = require('selenium-webdriver');

jest.setTimeout(40000);

test('TC15: Place order - Login before checkout', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://automationexercise.com/');
    await driver.findElement(By.linkText('Signup / Login')).click();

    await driver.findElement(By.css('[data-qa="login-email"]'))
      .sendKeys('test@test.com');
    await driver.findElement(By.css('[data-qa="login-password"]'))
      .sendKeys('password');

    await driver.findElement(By.css('[data-qa="login-button"]')).click();
    const logged = await driver.findElement(By.xpath('//a[contains(text(),"Logged in")]'));

    expect(logged).toBeDefined();
  } finally {
    await driver.quit();
  }
});
