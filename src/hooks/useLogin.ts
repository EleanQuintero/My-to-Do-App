import { useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'
import { getUser } from '../services/getUser'

interface useLoginTypes {
  logedUser: () => Promise<void>
}

export const useLogin = (): useLoginTypes => {
  const { data, setUserData, isloged, setLoginError } = useContext(TodoContext)
  const logedUser = async (): Promise<void> => {
    try {
      const user = await getUser(data)
      if (user !== undefined) {
        isloged(true)
        setUserData(user)
        setLoginError(false)
        console.log(document.cookie)
      }
    } catch (e) {
      setLoginError(true)
      throw new Error('Error al iniciar sesion')
    }
  }

  return { logedUser }
}
