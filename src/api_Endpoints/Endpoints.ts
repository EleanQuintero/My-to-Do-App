 /* export const API_URL = {
  GET: 'http://localhost:4567/todos/',
  POST: 'http://localhost:4567/todos/newTodo',
  PATCH: 'http://localhost:4567/todos/update/',
  DELETE: 'http://localhost:4567/todos/delete/',
  DELETE_COMPLETED_ALL: 'http://localhost:4567/todos/completed/delete/'
} */ 

export const API_URL = {
  GET:import.meta.env.VITE_API_URL_GET,
  POST: import.meta.env.VITE_API_URL_POST,
  PATCH: import.meta.env.VITE_API_URL_PATCH,
  DELETE: import.meta.env.VITE_API_URL_DELETE,
  DELETE_COMPLETED_ALL: import.meta.env.VITE_API_URL_DELETE_COMPLETED_ALL 
}
