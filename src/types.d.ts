import { TODO_FILTERS } from './const'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type FilterValue = typeof TODO_FILTERS [keyof typeof TODO_FILTERS]

export type ListOfTodos = Todo[]

export interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export interface TodoContextType {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
