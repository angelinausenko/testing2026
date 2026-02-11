const { When, Then } = require('@cucumber/cucumber')
const assert = require('assert')

When('User clicks on Products button', async function () {
  await this.page.click('a[href="/products"]')
})

Then('Products page should be displayed', async function () {
  const isVisible = await this.page.locator('text=All Products').isVisible()
  assert.strictEqual(isVisible, true)
})

When('User enters product name in search field', async function () {
  await this.page.fill('#search_product', 'Dress')
})

When('User clicks search button', async function () {
  await this.page.click('#submit_search')
})

Then('Searched products should be displayed', async function () {
  const isVisible = await this.page.locator('text=Searched Products').isVisible()
  assert.strictEqual(isVisible, true)
})
