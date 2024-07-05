import { createRoot } from 'react-dom/client'
import App from './App'
import 'todomvc-app-css/index.css'

const container: any = document.querySelector('#root')
const root = createRoot(container)

root.render(<App />)
