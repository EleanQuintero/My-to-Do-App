import React, { useContext, useEffect, useRef, useState } from 'react'
import { DeleteTodoProps, Todo as TodoType, UpdateTodoProps } from '../types'
import { TodoContext } from '../contexts/todoContext'
import { useTodos } from '../hooks/useTodos'

interface Props extends TodoType {
}

export const Todo: React.FC <Props> = ({ todoID, title, status }) => {
  const { todos, setTodos, isEditing, setIsEditing, sync, darkMode } = useContext(TodoContext)
  const [editedTitle, setEditedTitle] = useState(title)
  const inputEditTitle = useRef<HTMLInputElement>(null)
  const { updateTodo, deleteTodo, getTodos } = useTodos()

  const handleRemove = ({ todoID }: DeleteTodoProps): void => {
    const newTodos = todos.filter(todo => todo.todoID !== todoID)
    try {
      if (sync) {
        void deleteTodo({ todoID })
      }
    } finally {
      setTodos(newTodos)
    }
  }

  const handleComplete = ({ todoID, status }: Pick<TodoType, 'todoID' | 'status'>): void => {
    const todoStatus = status
    const newTodos = todos.map((todo) => {
      if (todo.todoID === todoID) {
        if (sync) {
          void updateTodo({ todoID, todoStatus })
        }
        return {
          ...todo,
          status
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleUpdateTitle = ({ todoID, todoTitle }: UpdateTodoProps): void => {
    const newTodos = todos.map((todo) => {
      if (todo.todoID === todoID) {
        if (sync) {
          void updateTodo({ todoID, todoTitle })
        }
        return {
          ...todo,
          todoTitle
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    try {
      if (e.key === 'Enter') {
        setEditedTitle(editedTitle.trim())
        setIsEditing('')
      }

      if (editedTitle !== title) {
        handleUpdateTitle({ todoID, todoTitle: editedTitle })
      }

      if (editedTitle === '') {
        handleRemove({ todoID })
        setIsEditing('')
      }

      if (e.key === 'Escape') {
        setEditedTitle(title)
        setIsEditing('')
      }
    } finally {
      void getTodos()
    }
  }

  useEffect(() => {
    if (isEditing === todoID.toString()) {
      inputEditTitle.current?.focus()
    }
  }, [isEditing, todoID])

  return (
    <>
      <div className={`${darkMode ? 'view-dark' : 'view'}`}>
        <input
          className='toggle'
          checked={status}
          type='checkbox'
          onChange={(event) => {
            handleComplete({ todoID, status: event.target.checked })
          }}
        />
        <label>{title}</label>
        <button
          className='destroy'
          onClick={() => { handleRemove({ todoID }) }}
        />
      </div>

      <input
        className={`${darkMode ? 'edit-dark' : 'edit'}`}
        value={editedTitle}
        onChange={(e) => { setEditedTitle(e.target.value) }}
        onKeyDown={handleKeyDown}
        onBlur={() => { setIsEditing('') }}
        ref={inputEditTitle}
      />
    </>

  )
}
