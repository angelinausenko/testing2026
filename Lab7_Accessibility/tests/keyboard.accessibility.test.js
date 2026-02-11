const { Builder, By, Key, until } = require('selenium-webdriver');

jest.setTimeout(30000);

describe('Accessibility: Keyboard navigation', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('Фокус можна перевести на поле пошуку', async () => {
    await driver.get('https://rozetka.com.ua/');

    const searchInput = await driver.wait(
      until.elementLocated(By.name('search')),
      15000
    );

    await searchInput.click();
    const active = await driver.switchTo().activeElement();

    const tag = await active.getTagName();
    expect(tag).toBe('input');
  });
});
