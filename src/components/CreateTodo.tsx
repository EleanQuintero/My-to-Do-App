import React, { useContext, useState } from 'react'
import { TodoContextType, TodoTitle } from '../types'
import { TodoContext } from '../contexts/todoContext'
import { useTodos } from '../hooks/useTodos'

export const CreateTodo: React.FC = () => {
  const { todos, setTodos, sync, darkMode, userData } = useContext<TodoContextType>(TodoContext)
  const [inputValue, setInputValue] = useState('')
  const { postTodo, getTodos } = useTodos()
  const [localId, setLocalId] = useState(0)

  const handleAddTodo = async ({ title }: TodoTitle): Promise<void> => {
    if (sync) {
      try {
        const newTodo = {
          userid: userData.user.id,
          title,
          todo_status: false
        }
        console.time()
        await Promise.all([postTodo(newTodo), getTodos()])
        console.timeEnd()
      } catch (e) {
        throw new Error('error al enviar el todo')
      }
    }
    if (!sync) {
      setLocalId(localId + 1)
      const newLocalTodo = {
        todoID: localId,
        title,
        status: false
      }
      const newTodos = [...todos, newLocalTodo]
      setTodos(newTodos)
    }
  }

  const handleSubmit = async (Event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    Event.preventDefault()

    if (inputValue === '') setInputValue('')

    if (inputValue !== '') {
      await handleAddTodo({ title: inputValue })
      setInputValue('')
    }
  }

  return (
    <form onSubmit={(event) => { void handleSubmit(event) }}>
      <input
        className={`${darkMode ? 'new-todo-dark' : 'new-todo'}`}
        value={inputValue}
        onChange={(e) => { setInputValue(e.target.value) }}
        placeholder='¿Cual sera tu proxima tarea?'
        autoFocus
      />
    </form>

  )
}
