import { Todo } from '../types'
import { API_URL } from '../consts/consts'

export const useFetchTodos = async (): Promise<Todo[] | undefined> => {
  try {
    const response = await fetch(API_URL.GET)
    const data: Todo[] = await response.json()
    if (data !== undefined) {
      return data
    }
  } catch (error) {
    const newError = 'Error fetching tasks:'
    console.log(newError, error)
  }
}
