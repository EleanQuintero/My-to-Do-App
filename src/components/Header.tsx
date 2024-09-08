
import { useContext } from 'react'
import { CreateTodo } from './CreateTodo'
import { TodoContext } from '../contexts/todoContext'
export const Header: React.FC = () => {
  const { darkMode } = useContext(TodoContext)
  return (
    <header>
      <h1 className={`${darkMode ? 'title-dark' : 'title'}`}>My to-Do-App!</h1>
      <CreateTodo />
    </header>
  )
}
