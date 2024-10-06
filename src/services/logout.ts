
export const logout = async (): Promise<void> => {
  try {
    const response = await fetch('http://localhost:5241/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const logedoutMessage = await response.json()
    return logedoutMessage
  } catch (e) {
    throw new Error('Error en la solicitud')
  }
}
