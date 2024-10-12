
import React, { useContext } from 'react'
import { Filters } from './Filters'
import { TodoContextType } from '../types'
import { TodoContext } from '../contexts/todoContext'
import { useTodos } from '../hooks/useTodos'

export const Footer: React.FC = () => {
  const { todos, setTodos, sync, darkMode } = useContext<TodoContextType>(TodoContext)
  const { getTodos, deleteCompletedTodos } = useTodos()
  const activeCount = todos.filter(todo => !todo.status).length
  const completedCount = todos.length - activeCount

  const handleRemoveAllCompleted = async (): Promise<void> => {
    if (!sync) {
      const newLocalTodos = todos.filter(todo => !todo.status)
      setTodos(newLocalTodos)
    } else {
      try {
        await deleteCompletedTodos()
        await getTodos()
      } catch (e) {
        throw new Error('No se han podido borrar las tareas')
      }
    }
  }

  return (
    <footer className={`${darkMode ? 'footer-dark md:h-10' : 'footer md:h-10'}`}>
      <span className='todo-count flex'>
        <strong className='w-20 md:w-36 gap-1 '>{activeCount} tareas pendientes</strong> 
      </span>
      <Filters />
      {completedCount > 0 && (
        <button
          className='clear-completed flex'
          onClick={() => {
            handleRemoveAllCompleted().catch(() => {
              // Handle error if necessary
            })
          }}
        >
         <span className='w-20 md:w-36 gap-1'>Borrar completadas</span>
        </button>
      )}
    </footer>
  )
}
