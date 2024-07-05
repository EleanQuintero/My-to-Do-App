import React, { useState } from 'react'
import { TodoTitle } from '../types'

interface Props {
  saveTodo: (title: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (Event: React.FormEvent<HTMLFormElement>): void => {
    Event.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
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
