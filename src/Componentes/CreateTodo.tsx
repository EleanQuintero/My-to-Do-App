import React, { useContext, useState } from 'react'
import { TodoContextType, TodoTitle } from '../types'
import { TodoContext } from '../contexts/todoContext'

export const CreateTodo: React.FC = () => {
  const { todos, setTodos } = useContext<TodoContextType>(TodoContext)
  const [inputValue, setInputValue] = useState('')

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const handleSubmit = (Event: React.FormEvent<HTMLFormElement>): void => {
    Event.preventDefault()

    if (inputValue === '') setInputValue('')

    if (inputValue !== '') {
      handleAddTodo({ title: inputValue })
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='new-todo'
        value={inputValue}
        onChange={(e) => { setInputValue(e.target.value) }}
        placeholder='¿Que deseas hacer?'
        autoFocus
      />
    </form>

  )
}
