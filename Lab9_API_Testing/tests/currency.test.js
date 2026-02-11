const pactum = require('pactum')

describe('Currency API Tests', () => {

  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'

  test('List of available currencies', async () => {
    await pactum
      .spec()
      .get(`${baseUrl}/currencies.json`)
      .expectStatus(200)
      .expectJsonLike({
        usd: /\w+/,
        eur: /\w+/
      })
  })

  test('EUR to all currencies', async () => {
    await pactum
      .spec()
      .get(`${baseUrl}/currencies/eur.json`)
      .expectStatus(200)
      .expectJsonLike({
        eur: {
          usd: /\d+/,
          gbp: /\d+/
        }
      })
  })

  test('EUR to USD rate', async () => {
    await pactum
      .spec()
      .get(`${baseUrl}/currencies/eur/usd.json`)
      .expectStatus(200)
      .expectJsonLike({
        usd: /\d+/
      })
  })

  test('Non-existing currency', async () => {
    await pactum
      .spec()
      .get(`${baseUrl}/currencies/abc.json`)
      .expectStatus(404)
  })

})
