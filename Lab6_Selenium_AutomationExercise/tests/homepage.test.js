const { Builder, By } = require('selenium-webdriver');

jest.setTimeout(30000);

test('AutomationExercise homepage elements are present', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://automationexercise.com/');

    // Верхнє меню
    const navMenu = await driver.findElement(By.css('header'));
    expect(navMenu).toBeDefined();

    // Логотип / банер
    const logo = await driver.findElement(By.css('img[alt="Website for automation practice"]'));
    const altText = await logo.getAttribute('alt');
    expect(altText).toContain('automation');

    // Кнопка Signup / Login
    const signupLoginBtn = await driver.findElement(By.linkText('Signup / Login'));
    const btnText = await signupLoginBtn.getText();
    expect(btnText).toBe('Signup / Login');
  } finally {
    await driver.quit();
  }
});
