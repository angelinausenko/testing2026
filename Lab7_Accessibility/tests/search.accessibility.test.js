const { Builder, By, until } = require('selenium-webdriver');

jest.setTimeout(30000);

describe('Accessibility: Search', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('Search доступний з клавіатури', async () => {
    await driver.get('https://rozetka.com.ua/');

    const searchInput = await driver.wait(
      until.elementLocated(By.name('search')),
      15000
    );

    await searchInput.sendKeys('ноутбук');

    const value = await searchInput.getAttribute('value');
    expect(value).toContain('ноутбук');
  });
});
