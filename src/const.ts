import { Todo, userData, userLogedData } from './types'

export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'todos',
    href: `/?filters=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Activos',
    href: `/?filters=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completados',
    href: `/?filters=${TODO_FILTERS.COMPLETED}`
  }
} as const

export const initialUserData: userData = {
  username: '',
  password: ''
}

export const initialvalue: Todo[] = []

export const initialLogedUser: userLogedData = {
  user: {
    id: '',
    username: '',
    avatar: ''
  }
}
