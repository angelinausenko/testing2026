const { Builder, By, until } = require('selenium-webdriver');

jest.setTimeout(30000);

describe('Accessibility: Login Button', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('Кнопка "Увійти" присутня та має текст', async () => {
    await driver.get('https://rozetka.com.ua/');

    const loginLink = await driver.wait(
      until.elementLocated(By.css('a[href*="signin"]')),
      15000
    );

    const text = await loginLink.getText();
    expect(text.length).toBeGreaterThan(0);
  });
});
