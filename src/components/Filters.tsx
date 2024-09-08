import React, { useContext } from 'react'
import { FILTERS_BUTTONS } from '../const'
import { FilterValue, TodoContextType } from '../types'
import { TodoContext } from '../contexts/todoContext'

export const Filters: React.FC = () => {
  const { filterSelected, setFilterSelected, darkMode } = useContext<TodoContextType>(TodoContext)

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  return (
    <ul className={`${darkMode ? 'filters-dark' : 'filters'}`}>
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = key === filterSelected
          const classname = isSelected ? 'selected' : ''

          return (
            <li key={key}>
              <a
                href={href}
                className={classname}
                onClick={(event) => {
                  event.preventDefault()
                  handleFilterChange(key as FilterValue)
                }}
              >
                {literal}
              </a>
            </li>
          )
        })
            }
    </ul>
  )
}
