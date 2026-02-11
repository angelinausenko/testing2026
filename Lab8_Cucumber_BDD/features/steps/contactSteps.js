const { When, Then } = require('@cucumber/cucumber')
const assert = require('assert')

When('User clicks Contact Us button', async function () {
  await this.page.click('a[href="/contact_us"]')
})

When('User fills contact form', async function () {
  await this.page.fill('input[data-qa="name"]', 'Angelina')
  await this.page.fill('input[data-qa="email"]', 'angelina@test.com')
  await this.page.fill('input[data-qa="subject"]', 'Test Subject')
  await this.page.fill('textarea[data-qa="message"]', 'This is a test message')
})

When('User submits contact form', async function () {
  await this.page.click('input[data-qa="submit-button"]')
})

Then('Success message should be visible', async function () {
  const isVisible = await this.page.locator('text=Success! Your details have been submitted successfully.').isVisible()
  assert.strictEqual(isVisible, true)
})
