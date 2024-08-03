import React, { useContext, useEffect, useRef, useState } from 'react'
import { TodoId, Todo as TodoType } from '../types'
import { TodoContext } from '../contexts/todoContext'
import { useTodos } from '../hooks/useTodos'

interface Props extends TodoType {
}

export const Todo: React.FC <Props> = ({ id, title, completed }) => {
  const { todos, setTodos, isEditing, setIsEditing, sync } = useContext(TodoContext)
  const [editedTitle, setEditedTitle] = useState(title)
  const inputEditTitle = useRef<HTMLInputElement>(null)
  const { updateTodo, deleteTodo } = useTodos()

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    if (!sync) {
      setTodos(newTodos)
    }

    void deleteTodo({ id })
    setTodos(newTodos)
  }

  const handleComplete = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (sync) {
          void updateTodo({ id, completed })
        }
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleUpdateTitle = ({ id, title }: { id: string, title: string }): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (sync) {
          void updateTodo({ id, title })
        }
        return {
          ...todo,
          title
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      setEditedTitle(editedTitle.trim())
      setIsEditing('')
    }

    if (editedTitle !== title) {
      handleUpdateTitle({ id, title: editedTitle })
    }

    if (editedTitle === '') {
      handleRemove({ id })
      setIsEditing('')
    }

    if (e.key === 'Escape') {
      setEditedTitle(title)
      setIsEditing('')
    }
  }

  useEffect(() => {
    inputEditTitle.current?.focus()
  }, [isEditing])

  return (
    <>
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

      <input
        className='edit'
        value={editedTitle}
        onChange={(e) => { setEditedTitle(e.target.value) }}
        onKeyDown={handleKeyDown}
        onBlur={() => { setIsEditing('') }}
        ref={inputEditTitle}
      />
    </>

  )
}
