import { createContext, useState } from 'react'
import { FilterValue, Todo, TodoContextType, userData, userLogedData } from '../types'
import { initialLogedUser, initialUserData, initialvalue, TODO_FILTERS } from '../const'

interface Props {
  children: React.ReactNode
}

export const TodoContext = createContext<TodoContextType>({
  sync: false,
  setSync: () => {},
  todos: [],
  setTodos: () => {},
  filterSelected: TODO_FILTERS.ALL,
  setFilterSelected: () => {},
  isEditing: '',
  setIsEditing: () => {},
  data: initialUserData,
  setData: () => {},
  userData: initialLogedUser,
  setUserData: () => {},
  isloged: () => {},
  loged: false,
  darkMode: false,
  setDarkmode: () => {},
  loginError: false,
  setLoginError: () => {}
})

export const TodoProvider: React.FC<Props> = ({ children }) => {
  const [sync, setSync] = useState(false)
  const [todos, setTodos] = useState<Todo[]>(initialvalue)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  const [isEditing, setIsEditing] = useState('')
  const [data, setData] = useState<userData>(initialUserData)
  const [userData, setUserData] = useState<userLogedData>(initialLogedUser)
  const [loged, isloged] = useState(false)
  const [darkMode, setDarkmode] = useState(false)
  const [loginError, setLoginError] = useState(false)
  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
      filterSelected,
      setFilterSelected,
      isEditing,
      setIsEditing,
      sync,
      setSync,
      data,
      setData,
      userData,
      setUserData,
      isloged,
      loged,
      darkMode,
      setDarkmode,
      loginError,
      setLoginError
    }}
    >
      {children}
    </TodoContext.Provider>
  )
}
