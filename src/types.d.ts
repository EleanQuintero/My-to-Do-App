import { TODO_FILTERS } from './const'

export interface Todo {
  todoID: number
  userID?: string
  title: string
  status: boolean
  created?: string
}

export interface Newtodo {
  userID?: string
  title: string
  todo_status: boolean
}

export interface UpdateTodoProps {
  todoID: number
  todoTitle?: string
  todoStatus?: boolean
}

export interface DeleteTodoProps {
  todoID: number
}

export type TodoId = Pick<Todo, 'todoID'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'status'>
export type userID = Pick<Todo, 'userID'>
export type TodoCreated = Pick<Todo, 'created'>

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
  setIsEditing: React.Dispatch<React.SetStateAction<string>>
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
