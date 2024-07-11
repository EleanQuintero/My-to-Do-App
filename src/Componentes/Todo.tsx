import React, { useContext } from 'react'
import { TodoId, Todo as TodoType } from '../types'
import { TodoContext } from '../contexts/todoContext'

interface Props extends TodoType {
}

export const Todo: React.FC <Props> = ({ id, title, completed }) => {
  const { todos, setTodos } = useContext(TodoContext)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className='view'>
      <input
        className='toggle'
        checked={completed}
        type='checkbox'
        onChange={(event) => {
          handleComplete({ id, completed: event.target.checked })
        }}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => { handleRemove({ id }) }}
      />
    </div>

  )
}
