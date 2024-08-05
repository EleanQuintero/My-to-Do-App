import React, { useContext, useState } from 'react'
import { TodoContextType, TodoTitle } from '../types'
import { TodoContext } from '../contexts/todoContext'
import { useTodos } from '../hooks/useTodos'

export const CreateTodo: React.FC = () => {
  const { todos, setTodos, sync } = useContext<TodoContextType>(TodoContext)
  const [inputValue, setInputValue] = useState('')
  const { postTodo, getTodos } = useTodos()
  const [localId, setLocalId] = useState(0)

  const handleAddTodo = ({ title }: TodoTitle): void => {
    if (sync) {
      const newTodo = [{
        id: 0,
        title,
        completed: false
      }]
      void postTodo(newTodo)
      void getTodos()
    }
    if (!sync) {
      setLocalId(localId + 1)
      const newLocalTodo = {
        id: localId,
        title,
        completed: false
      }
      const newTodos = [...todos, newLocalTodo]
      setTodos(newTodos)
    }
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
