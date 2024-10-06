import React, { useContext, useState } from 'react'
import { TodoContextType, TodoTitle } from '../types'
import { TodoContext } from '../contexts/todoContext'
import { useTodos } from '../hooks/useTodos'

export const CreateTodo: React.FC = () => {
  const { todos, setTodos, sync, darkMode, userData } = useContext<TodoContextType>(TodoContext)
  const [inputValue, setInputValue] = useState('')
  const { postTodo, getTodos } = useTodos()
  const [localId, setLocalId] = useState(todos.length)
  const [error, setError] = useState<string | null>(null)

  const handleAddTodo = async ({ title }: TodoTitle): Promise<void> => {
    if (sync) {
      try {
        const newTodo = {
          userid: userData.user.id,
          title,
          todo_status: false
        }
        await postTodo(newTodo)
        await getTodos()
        setError(null) // Reset error only after successful sync
      } catch (e) {
        setError('Error al enviar el todo')
        console.error(error)
      }
    } else {
      const newLocalTodo = {
        todoID: localId,
        title,
        status: false
      }
      setLocalId(localId + 1)
      const newTodos = [...todos, newLocalTodo]
      setTodos(newTodos)
      setError(null) // No API call, so reset error immediately
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    if (inputValue.trim() !== '') {
      await handleAddTodo({ title: inputValue.trim() })
      setInputValue('')
    }
  }

  return (
    <form onSubmit={(event) => { void handleSubmit(event) }}>
      <input
        className={`${darkMode ? 'new-todo-dark' : 'new-todo'}`}
        value={inputValue}
        onChange={(e) => { setInputValue(e.target.value) }}
        placeholder='¿Cuál será tu próxima tarea?'
        autoFocus
      />
    </form>
  )
}
