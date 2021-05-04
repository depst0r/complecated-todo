const DOMAIN = 'http://localhost:3131/'

class ApiCall {
  constructor(domains) {
    this.domain = domain
  }

  async perform(url, data, config) {
    const request = await fetch(`${this.domain}/${url}`, {
      ...config,
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application-json',
      },
    })

    return await request.json()
  }

  async get() {}

  async post() {}

  async put() {}

  async delete() {}
}
