const { Builder, By, Key } = require('selenium-webdriver');

jest.setTimeout(30000);

test('Test Case 2: Login with valid credentials', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://automationexercise.com/');
    await driver.findElement(By.linkText('Signup / Login')).click();

    await driver.findElement(By.css('input[data-qa="login-email"]'))
      .sendKeys('test@test.com');
    await driver.findElement(By.css('input[data-qa="login-password"]'))
      .sendKeys('password', Key.ENTER);

    const loggedUser = await driver.findElement(By.xpath('//a[contains(text(),"Logged in as")]'));
    expect(loggedUser).toBeDefined();
  } finally {
    await driver.quit();
  }
});
