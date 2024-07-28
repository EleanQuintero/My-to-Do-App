import { useCallback, useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'
import { useFetchTodos } from '../services/getTodos'
import { Todo } from '../types'
import { API_URL } from '../consts/consts'

interface useTodosType {
  getTodos: () => Promise<void>
  postTodo: (data: Todo) => Promise<void>

}

export const useTodos = (): useTodosType => {
  const { setTodos, setSync } = useContext(TodoContext)
  const getTodos = useCallback(async (): Promise<void> => {
    try {
      const newTodos = await useFetchTodos()
      if (newTodos !== undefined) {
        setSync(true)
        setTodos(newTodos)
      } else {
        const initialValue: Todo[] = []
        setTodos(initialValue)
      }
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }, [])

  const postTodo = async (data: Todo): Promise<void> => {
    try {
      const response = await fetch(API_URL.POST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        throw new Error('No se pudo enviar la tarea:' + response.statusText)
      }

      const responseData = await response.text()
      console.log('Respuesta del servidor: ', responseData)
    } catch (error) {
      throw new Error('Error al conectar')
    }
  }
  return { getTodos, postTodo }
}
