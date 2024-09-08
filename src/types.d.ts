import { TODO_FILTERS } from './const'

export interface Todo {
  id: number | string
  title: string
  completed: boolean
}

export interface UpdateTodoProps {
  id: number | string
  title?: string
  completed?: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>
export type uuid = `${string}-${string}-${string}-${string}-${string}`

export type FilterValue = typeof TODO_FILTERS [keyof typeof TODO_FILTERS]

export type ListOfTodos = Todo[]

export interface Props {
  todos: ListOfTodos
}

export interface TodoContextType {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  filterSelected: FilterValue
  setFilterSelected: React.Dispatch<React.SetStateAction< FilterValue>>
  isEditing: string
  setIsEditing: React.Dispatch<React.SetStateAction<number | string>>
  sync: boolean
  setSync: React.Dispatch<React.SetStateAction<boolean>>
  data: userData
  setData: React.Dispatch<React.SetStateAction<userData>>
  userData: userLogedData
  setUserData: React.Dispatch<React.SetStateAction<userLogedData>>
  loged: boolean
  isloged: React.Dispatch<React.SetStateAction<boolean>>
  darkMode: boolean
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>
  loginError: boolean
  setLoginError: React.Dispatch<React.SetStateAction<boolean>>
}

export interface userData {
  username: string
  password: string
}

export interface userLogedData {
  user: {
    id: string
    username: string
    avatar: string
  }
  Error?: String
}
