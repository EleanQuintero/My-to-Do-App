import { useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'
import { logout } from '../services/logout'
import { initialUserData } from '../const'

export const LogedSection = (): React.JSX.Element => {
  const { userData, darkMode, isloged, loged, setData } = useContext(TodoContext)

  const handleClick = (): void => {
    void logout()
    setData(initialUserData)
    isloged(!loged)
  }
  return (
    <>
      <img src={`${userData.user?.avatar}`} className={`${darkMode ? 'user-avatar-dark' : 'user-avatar'}`} />
      <h1>Bienvenido {userData.user?.username}</h1>
      <button className={`${darkMode ? 'fetch-todo-button-dark' : 'fetch-todo-button'}`}>Actualizar mis tareas</button>
      <button onClick={handleClick} className={`${darkMode ? 'logout-button-dark' : 'logout-button'}`}>Cerrar sesion</button>
    </>
  )
}
