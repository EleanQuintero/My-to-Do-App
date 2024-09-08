import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { UserSection } from './components/UserSection'
import './App.css'
import { useContext } from 'react'
import { TodoContext } from './contexts/todoContext'
import { ThemeSwitch } from './components/ThemeSwitch'

const App = (): React.JSX.Element => {
  const { darkMode } = useContext(TodoContext)
  return (
    <div className={`${darkMode ? 'todoapp-dark' : 'todoapp'}`}>
      <ThemeSwitch />
      <UserSection />
      <Header />
      <Todos />
      <Footer />
    </div>
  )
}

export default App
