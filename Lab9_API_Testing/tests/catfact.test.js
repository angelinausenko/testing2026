const pactum = require('pactum')

describe('CatFact API Tests', () => {

  const baseUrl = 'https://catfact.ninja'

  test('Check breed structure', async () => {
    await pactum
      .spec()
      .get(`${baseUrl}/breeds`)
      .expectStatus(200)
      .expectJsonLike({
        data: [{
          breed: /\w+/,
          country: /\w+/
        }]
      })
  })

  test('Check fact structure', async () => {
    await pactum
      .spec()
      .get(`${baseUrl}/fact`)
      .expectStatus(200)
      .expectJsonLike({
        fact: /\w+/,
        length: /\d+/
      })
  })

  test('Check limit parameter', async () => {
    const response = await pactum
      .spec()
      .get(`${baseUrl}/facts?limit=2`)
      .expectStatus(200)

    expect(response.body.data.length).toBe(2)
  })

  test('Check max_length parameter', async () => {
    const response = await pactum
      .spec()
      .get(`${baseUrl}/fact?max_length=50`)
      .expectStatus(200)

    expect(response.body.fact.length).toBeLessThanOrEqual(50)
  })

  test('Check headers', async () => {
    await pactum
      .spec()
      .get(`${baseUrl}/fact`)
      .expectStatus(200)
      .expectHeader('server')
      .expectHeader('cache-control')
      .expectHeader('date')
  })

  test('Check types of fact and length', async () => {
    const response = await pactum
      .spec()
      .get(`${baseUrl}/fact`)
      .expectStatus(200)

    expect(typeof response.body.fact).toBe('string')
    expect(typeof response.body.length).toBe('number')
  })

})
