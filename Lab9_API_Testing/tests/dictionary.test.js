const pactum = require('pactum')

describe('Dictionary API Tests', () => {

  const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en'

  const words = ['love', 'computer', 'science', 'music', 'book']

  words.forEach(word => {
    test(`Check examples exist for word: ${word}`, async () => {
      const response = await pactum
        .spec()
        .get(`${baseUrl}/${word}`)
        .expectStatus(200)

      const meanings = response.body[0].meanings
      const hasExample = meanings.some(m =>
        m.definitions.some(d => d.example)
      )

      expect(hasExample).toBe(true)
    })
  })

})
