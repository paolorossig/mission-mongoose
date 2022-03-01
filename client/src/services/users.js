const baseUrl = 'http://localhost:4000/users'

export async function registerUser(data) {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => res.json())

    return response
  } catch (error) {
    console.error(error)
  }
}

export async function listUsers() {
  try {
    const response = await fetch(baseUrl).then((res) => res.json())
    return response
  } catch (error) {
    console.error(error)
  }
}
