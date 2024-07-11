import React, { useContext } from 'react'
import { Todo } from './Todo'
import { TodoContext } from '../contexts/todoContext'
import { TODO_FILTERS } from '../const'

export const Todos: React.FC = () => {
  const { todos, filterSelected } = useContext(TodoContext)

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <ul className='todo-list'>
      {filteredTodos.map(todo => (
        <li
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''} `}
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
