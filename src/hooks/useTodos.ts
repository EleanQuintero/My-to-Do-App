import { useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'
import { useFetchTodos } from '../services/getTodos'
import { DeleteTodoProps, Newtodo, Todo, UpdateTodoProps } from '../types'
import { API_URL } from '../api_Endpoints/Endpoints'

interface useTodosType {
  getTodos: () => Promise<void>
  postTodo: (data: Newtodo) => Promise<void>
  updateTodo: ({ todoID, todoStatus, todoTitle }: UpdateTodoProps) => Promise<void>
  deleteTodo: ({ todoID }: DeleteTodoProps) => Promise<void>
  deleteCompletedTodos: () => Promise<void>

}

export const useTodos = (): useTodosType => {
  const { setTodos, userData } = useContext(TodoContext)
  const userId = userData.user.id
  const getTodos = async (): Promise<void> => {
    try {
      const newTodos = await useFetchTodos(userId)
      if (newTodos !== undefined) {
        setTodos(newTodos)
      } else {
        const initialValue: Todo[] = []
        setTodos(initialValue)
      }
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  const postTodo = async (data: Newtodo): Promise<void> => {
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

  const updateTodo = async ({ todoID, todoTitle, todoStatus }: UpdateTodoProps): Promise<void> => {
    try {
      const data: { todo_title?: string, todo_status?: boolean } = {}
      if (todoTitle !== undefined) {
        data.todo_title = todoTitle
      }
      if (todoStatus !== undefined) {
        data.todo_status = todoStatus
      }
      console.log(data)

      const response = await fetch(`${API_URL.PATCH}${todoID}/${userId}`, {
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

  const deleteTodo = async ({ todoID }: DeleteTodoProps): Promise<void> => {
    try {
      const response = await fetch(`${API_URL.DELETE}${todoID}`, {
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
      const response = await fetch(`${API_URL.DELETE_COMPLETED_ALL}${userId}`, {
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
