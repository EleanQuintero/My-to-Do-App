/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useContext } from 'react'
import { Filters } from './Filters'
import { TodoContextType } from '../types'
import { TodoContext } from '../contexts/todoContext'
import { useTodos } from '../hooks/useTodos'

export const Footer: React.FC = () => {
  const { todos, setTodos, sync } = useContext<TodoContextType>(TodoContext)
  const { getTodos } = useTodos()
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters />
      {sync
        ? <button className='clear-completed' onClick={getTodos}>update</button>
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
