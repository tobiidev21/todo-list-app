export async function createUser (userFormData) {
  const apiUrl = import.meta.env.VITE_API_URL

  try {
    const response = await fetch(`${apiUrl}/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userFormData)
    })

    const data = await response.json()

    if (response.status === 201) {
      return data
    } else {
      console.error(`Error ${response.status}:`, data)
      throw new Error(`API error: ${response.status}`)
    }
  } catch (error) {
    console.error('Request failed:', error)
    return { error: true, message: 'Something went wrong' }
  }
}
