import { Todo, TodoCompleted, TodoCreated, TodoId, TodoTitle, userID } from '../types'
import { API_URL } from '../api_Endpoints/Endpoints'

interface todoData {
  todo_id: TodoId
  user_id: userID
  todo_title: TodoTitle
  todo_status: TodoCompleted
  created_at: TodoCreated
}

export const useFetchTodos = async (id: string): Promise<Todo[] | undefined> => {
  try {
    const response = await fetch(API_URL.GET + id)
    const data = await response.json()
    if (data !== undefined) {
      return data?.map((todo: todoData) => ({ // mapeamos el json obtenido
        todoID: todo.todo_id,
        userID: todo.user_id,
        title: todo.todo_title,
        status: todo.todo_status,
        created: todo.created_at
      }))
    }
  } catch (error) {
    const newError = 'Error fetching tasks:'
    console.log(newError, error)
  }
}
