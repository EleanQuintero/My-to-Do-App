import { userData, userLogedData } from '../types'

export const getUser = async ({ username, password }: userData): Promise<userLogedData> => {
  try {
    const response = await fetch('http://localhost:5241/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    if (response.ok) {
      const json = await response.json()
      const user: userLogedData = json
      return user
    } else {
      throw new Error('Error al iniciar sesion')
    }
  } catch (error) {
    throw new Error('Error al realizar la solicitud, intente de nuevo')
  }
}
