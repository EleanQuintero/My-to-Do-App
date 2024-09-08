import { useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'
import '../styles/login.css'

import { Login } from './Login'
import { LoginIcon } from './LoginIcon'
import { LogedSection } from './LogedSection'
export const UserSection = (): React.JSX.Element => {
  const { loged, darkMode } = useContext(TodoContext)
  return (
    <>
      <LoginIcon />
      <section className={`${darkMode ? 'login-dark' : 'login'}`}>
        {
            loged
              ? <LogedSection />
              : <Login />
        }
      </section>
    </>
  )
}
