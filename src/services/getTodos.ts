import { Todo } from '../types'

export const useFetchTodos = async (): Promise<Todo[] | undefined> => {
  try {
    const response = await fetch('http://localhost:4567/todos')
    const data: Todo[] | undefined = await response.json()
    if (data !== undefined) {
      return data
    }
  } catch (error) {
    const newError = 'Error fetching tasks:'
    console.log(newError, error)
  }
}
