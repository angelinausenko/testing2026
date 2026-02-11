const { When, Then } = require('@cucumber/cucumber')

When('User clicks on Signup/Login button', async function () {
  await this.page.click('a[href="/login"]')
})

When('User enters name and new email', async function () {
  const randomEmail = `angelina${Date.now()}@test.com`
  await this.page.fill('input[data-qa="signup-name"]', 'Angelina')
  await this.page.fill('input[data-qa="signup-email"]', randomEmail)
})

When('User clicks Signup button', async function () {
  await this.page.click('button[data-qa="signup-button"]')
})

Then('User should see account creation form', async function () {
  await this.page.waitForSelector('text=Enter Account Information')
})
