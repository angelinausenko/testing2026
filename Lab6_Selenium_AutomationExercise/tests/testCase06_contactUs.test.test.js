const { Builder, By, Key } = require('selenium-webdriver');

jest.setTimeout(40000);

test('TC6: Contact Us form submission', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://automationexercise.com/');
    await driver.findElement(By.linkText('Contact us')).click();

    await driver.findElement(By.name('name')).sendKeys('Angelina');
    await driver.findElement(By.name('email')).sendKeys('angelina@test.com');
    await driver.findElement(By.name('subject')).sendKeys('Test');
    await driver.findElement(By.id('message')).sendKeys('Test message');
    await driver.findElement(By.name('submit')).click();

    await driver.switchTo().alert().accept();

    const success = await driver.findElement(By.css('.status.alert-success'));
    expect(success).toBeDefined();
  } finally {
    await driver.quit();
  }
});
