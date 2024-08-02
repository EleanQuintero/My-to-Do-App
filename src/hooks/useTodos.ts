import { useCallback, useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'
import { useFetchTodos } from '../services/getTodos'
import { Todo, UpdateTodoProps, uuid } from '../types'
import { API_URL } from '../consts/consts'

interface useTodosType {
  getTodos: () => Promise<void>
  postTodo: (data: Todo[]) => Promise<void>
  updateTodo: ({ id, title, completed }: UpdateTodoProps) => Promise<void>

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

  const postTodo = async (data: Todo[]): Promise<void> => {
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

      // const responseData = await response.text()
      // console.log('Respuesta del servidor: ', responseData)
    } catch (error) {
      throw new Error('Error al conectar')
    }
  }

  const updateTodo = async ({ id, title, completed }: { id: uuid, title?: string, completed?: boolean }): Promise<void> => {
    try {
      const data: { title?: string, completed?: boolean } = {}
      if (title !== undefined) {
        data.title = title
      }
      if (completed !== undefined) {
        data.completed = completed
      }

      const response = await fetch(`http://localhost:4567/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        throw new Error('No se pudo actualizar el todo:' + response.statusText)
      }
    } catch (error) {
      throw new Error('Error al hacer la petición')
    }
  }

  return { getTodos, postTodo, updateTodo }
}
