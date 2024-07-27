import { useCallback, useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'
import { useFetchTodos } from '../services/getTodos'
import { Todo } from '../types'

interface useTodosType {
  getTodos: () => Promise<void>
}

export const useTodos = (): useTodosType => {
  const { setTodos } = useContext(TodoContext)
  const getTodos = useCallback(async (): Promise<void> => {
    try {
      const newTodos = await useFetchTodos()
      if (newTodos !== undefined) {
        setTodos(newTodos)
      } else {
        const initialValue: Todo[] = []
        setTodos(initialValue)
      }
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }, [])
  return { getTodos }
}
