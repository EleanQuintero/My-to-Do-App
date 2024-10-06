import React, { useContext } from 'react'
import { Todo } from './Todo'
import { TodoContext } from '../contexts/todoContext'
import { TODO_FILTERS } from '../const'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export const Todos: React.FC = () => {
  const { darkMode } = useContext(TodoContext)
  const [parent] = useAutoAnimate()
  const { todos, filterSelected, setIsEditing, isEditing } = useContext(TodoContext)
  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.status
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.status
    return todo
  })

  return (
    <ul className={`${darkMode ? 'todo-list-dark' : 'todo-list'}`} ref={parent}>
      {filteredTodos.map(todo => (
        <li
          key={todo.todoID}
          onDoubleClick={() => { setIsEditing(todo.todoID.toString()) }}
          className={`
            ${todo.status ? 'completed' : ''} 
            ${isEditing === todo.todoID.toString()
               ? `${darkMode ? 'editing-dark' : 'editing'}`
               : ''}
            `}
        >
          <Todo
            key={todo.todoID}
            todoID={todo.todoID}
            title={todo.title}
            status={todo.status}
          />
        </li>
      ))}
    </ul>
  )
}
