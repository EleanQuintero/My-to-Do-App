import { useCallback, useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'
import { useFetchTodos } from '../services/getTodos'
import { Todo, UpdateTodoProps } from '../types'
import { API_URL } from '../api_Endpoints/Endpoints'

interface useTodosType {
  getTodos: () => Promise<void>
  postTodo: (data: Todo[]) => Promise<void>
  updateTodo: ({ id, title, completed }: UpdateTodoProps) => Promise<void>
  deleteTodo: ({ id }: { id: number | string }) => Promise<void>
  deleteCompletedTodos: () => Promise<void>

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
    } catch (error) {
      throw new Error('Error al conectar')
    }
  }

  const updateTodo = async ({ id, title, completed }: { id: number | string, title?: string, completed?: boolean }): Promise<void> => {
    try {
      const data: { title?: string, completed?: boolean } = {}
      if (title !== undefined) {
        data.title = title
      }
      if (completed !== undefined) {
        data.completed = completed
      }

      const response = await fetch(`${API_URL.PATCH}${id}`, {
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

  const deleteTodo = async ({ id }: { id: number | string }): Promise<void> => {
    try {
      const response = await fetch(`${API_URL.DELETE}${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('No se pudo eliminar el todo:' + response.statusText)
      }
    } catch (error) {
      throw new Error('Error al hacer la petición')
    }
  }

  const deleteCompletedTodos = async (): Promise<void> => {
    try {
      const response = await fetch(`${API_URL.DELETE_COMPLETED_ALL}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('No se han podido eliminar los todos:' + response.statusText)
      }
    } catch (error) {
      throw new Error('Error al hacer la petición')
    }
  }

  return { getTodos, postTodo, updateTodo, deleteTodo, deleteCompletedTodos }
}
