import { createContext, useState } from 'react'
import { FilterValue, Todo, TodoContextType } from '../types'
import { TODO_FILTERS } from '../const'

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
  setIsEditing: () => {}
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const TodoProvider: React.FC<Props> = ({ children }) => {
  const [sync, setSync] = useState(false)
  const [todos, setTodos] = useState<Todo[]>([])
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  const [isEditing, setIsEditing] = useState('')
  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
      filterSelected,
      setFilterSelected,
      isEditing,
      setIsEditing,
      sync,
      setSync
    }}
    >
      {children}
    </TodoContext.Provider>
  )
}
