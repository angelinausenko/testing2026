const { When, Then } = require('@cucumber/cucumber')
const assert = require('assert')

When('User enters correct email and password', async function () {
  await this.page.fill('input[data-qa="login-email"]', 'testuser@test.com')
  await this.page.fill('input[data-qa="login-password"]', '123456')
})

When('User clicks Login button', async function () {
  await this.page.click('button[data-qa="login-button"]')
})

Then('User should see logged in as username', async function () {
  const isVisible = await this.page.locator('text=Logged in as').isVisible()
  assert.strictEqual(isVisible, true)
})
