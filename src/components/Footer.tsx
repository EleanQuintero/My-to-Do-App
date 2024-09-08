/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useContext } from 'react'
import { Filters } from './Filters'
import { TodoContextType } from '../types'
import { TodoContext } from '../contexts/todoContext'
import { useTodos } from '../hooks/useTodos'
import { ReloadIcon } from '../icons/icons'

export const Footer: React.FC = () => {
  const { todos, setTodos, sync, darkMode } = useContext<TodoContextType>(TodoContext)
  const { getTodos, deleteCompletedTodos } = useTodos()
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const handleRemoveAllCompleted = (): void => {
    if (!sync) {
      const newLocalTodos = todos.filter(todo => !todo.completed)
      setTodos(newLocalTodos)
    }

    if (sync) {
      void deleteCompletedTodos()
      void getTodos()
    }
  }

  return (
    <footer className={`${darkMode ? 'footer-dark' : 'footer'}`}>
      <span className='todo-count'>
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters />
      {sync
        ? <button className={`${darkMode ? 'reload-button-dark' : 'reload-button'}`} onClick={getTodos}><ReloadIcon /></button>
        : ''}
      {completedCount > 0 && (
        <button
          className='clear-completed'
          onClick={handleRemoveAllCompleted}
        >
          Borrar completadas
        </button>
      )}
    </footer>
  )
}
