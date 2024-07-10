import { createRoot } from 'react-dom/client'
import App from './App'
import 'todomvc-app-css/index.css'
import { TodoProvider } from './contexts/todoContext'

const container: any = document.querySelector('#root')
const root = createRoot(container)

root.render(
  <TodoProvider>
    <App />
  </TodoProvider>

)
