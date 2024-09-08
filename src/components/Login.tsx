import { useContext, useEffect } from 'react'
import { userData } from '../types'
import { TodoContext } from '../contexts/todoContext'
import { useLogin } from '../hooks/useLogin'

export const Login: React.FC = () => {
  const { setData, data, loginError } = useContext(TodoContext)
  try {
    useEffect(() => {
      if (data.username.length > 1) {
        void logedUser()
      }
    }, [data])
  } catch (e) {
    console.log('error en login')
  }
  const { logedUser } = useLogin()
  const handleSumbitLog = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const LogData = Object.fromEntries(new window.FormData(event.currentTarget)) as unknown as userData
    setData(LogData)
  }

  return (
    <>
      <h1 className='welcome-message'>Bienvenido a My toDo!</h1>
      <form className='login-input' autoComplete='off' onSubmit={handleSumbitLog} action=''>
        <input
          name='username' type='text' placeholder='Nombre de usuario'
        />
        <input
          name='password' type='password' placeholder='Contraseña'
        />
        {
          loginError
            ? <h1>Error en los datos introducidos</h1>
            : ''
        }
        <button>Iniciar Sesion</button>
      </form>
    </>

  )
}
