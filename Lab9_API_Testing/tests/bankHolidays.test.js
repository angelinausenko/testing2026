const pactum = require('pactum')

describe('Bank Holidays API Tests', () => {

  const url = 'https://www.gov.uk/bank-holidays.json'

  test('Check number of holidays', async () => {
    const response = await pactum
      .spec()
      .get(url)
      .expectStatus(200)

    const data = response.body['england-and-wales'].events
    expect(data.length).toBeGreaterThan(5)
  })

  test('Check Easter date exists', async () => {
    const response = await pactum
      .spec()
      .get(url)
      .expectStatus(200)

    const events = response.body['england-and-wales'].events
    const easter = events.find(e => e.title.toLowerCase().includes('easter'))
    expect(easter).toBeDefined()
  })

})
