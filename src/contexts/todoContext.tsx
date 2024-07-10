import { createContext, useState } from 'react'
import { mockTodos } from '../Mocks/mockTodos'
import { Todo, TodoContextType } from '../types'

interface Props {
  children: React.ReactNode
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => {}
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const TodoProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(mockTodos)
  return (
    <TodoContext.Provider value={{
      todos,
      setTodos
    }}
    >
      {children}
    </TodoContext.Provider>
  )
}
