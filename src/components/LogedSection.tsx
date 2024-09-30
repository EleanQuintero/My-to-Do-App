import { useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'
import { logout } from '../services/logout'
import { initialUserData, initialvalue } from '../const'
import { useTodos } from '../hooks/useTodos'

export const LogedSection = (): React.JSX.Element => {
  const { userData, darkMode, isloged, loged, setData, setTodos } = useContext(TodoContext)
  const { getTodos } = useTodos()
  const id = userData.user.id
  console.log(id)

  const handleClick = (): void => {
    void logout()
    setData(initialUserData)
    setTodos(initialvalue)
    isloged(!loged)
  }

  const handleTodo = (): void => {
    void getTodos()
  }
  return (
    <>
      <img src={`${userData.user?.avatar}`} className={`${darkMode ? 'user-avatar-dark' : 'user-avatar'}`} />
      <h1>Bienvenido {userData.user?.username}</h1>
      <button onClick={handleTodo} className={`${darkMode ? 'fetch-todo-button-dark' : 'fetch-todo-button'}`}>Actualizar mis tareas</button>
      <button onClick={handleClick} className={`${darkMode ? 'logout-button-dark' : 'logout-button'}`}>Cerrar sesion</button>
    </>
  )
}
