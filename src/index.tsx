import { createRoot } from 'react-dom/client'
import App from './App'
import { TodoProvider } from './contexts/todoContext'
import './index.css'

const container: any = document.querySelector('#root')
const root = createRoot(container)

root.render(
  <TodoProvider>
    <App />
  </TodoProvider>

)
