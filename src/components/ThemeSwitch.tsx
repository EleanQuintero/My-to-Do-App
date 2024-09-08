import { useContext, useEffect } from 'react'
import { DarkModeIcon, LigthModeIcon } from '../icons/icons'
import { TodoContext } from '../contexts/todoContext'

export const ThemeSwitch = (): JSX.Element => {
  const { setDarkmode, darkMode } = useContext(TodoContext)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('body-dark')
    } else {
      document.body.classList.remove('body-dark')
    }
  }, [darkMode])

  function handleClick (): void {
    setDarkmode(!darkMode)
  }

  return (
    <section>
      <label className={`${darkMode ? 'ligthmode' : 'darkmode'}`} id='darkmodelabel' htmlFor='darkmode'>{
        darkMode
          ? <LigthModeIcon />
          : <DarkModeIcon />
        }
      </label>
      <input onClick={handleClick} id='darkmode' type='checkbox' className='Darkmode-button' />
    </section>
  )
}
