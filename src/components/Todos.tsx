import React, { useContext, useEffect } from 'react'
import { Todo } from './Todo'
import { TodoContext } from '../contexts/todoContext'
import { TODO_FILTERS } from '../const'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useTodos } from '../hooks/useTodos'

export const Todos: React.FC = () => {
  const [parent] = useAutoAnimate()
  const { getTodos } = useTodos()
  const { todos, filterSelected, setIsEditing, isEditing } = useContext(TodoContext)
  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  useEffect(() => {
    try {
      void getTodos()
    } catch {
      console.error('Error fetching todos')
    }
  }, [])

  return (
    <ul className='todo-list' ref={parent}>
      {filteredTodos?.map(todo => (
        <li
          key={todo.id}
          onDoubleClick={() => { setIsEditing(todo.id) }}
          className={`
            ${todo.completed ? 'completed' : ''} 
            ${isEditing === todo.id ? 'editing' : ''}
            `}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        </li>
      ))}
    </ul>
  )
}
