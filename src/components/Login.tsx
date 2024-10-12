import { useContext, useEffect } from 'react'
import { userData } from '../types'
import { TodoContext } from '../contexts/todoContext'
import { useLogin } from '../hooks/useLogin'

export const Login: React.FC = () => {
  const { setData, setSync, data, loginError } = useContext(TodoContext)
  const { logedUser } = useLogin()

  useEffect(() => {
    if (data.username.length > 1) {
      void logedUser()
    }
  }, [data, logedUser])

  const handleSubmitLog = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const logData = Object.fromEntries(new window.FormData(event.currentTarget)) as unknown as userData
    setData(logData)
    setSync(true)
  }

  return (
    <>
      <h1 className='welcome-message '>Bienvenido a My toDo!</h1>
      <form className='login-input' autoComplete='off' onSubmit={handleSubmitLog} action=''>
        <input
          name='username' type='text' placeholder='Nombre de usuario'
        />
        <input
          name='password' type='password' placeholder='Contraseña'
        />
        {loginError && <h1>Error en los datos introducidos</h1>}
        <button>Iniciar Sesión</button>
      </form>
    </>
  )
}
