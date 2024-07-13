import './App.css'
import { Todos } from './Componentes/Todos'
import { Footer } from './Componentes/Footer'
import { Header } from './Componentes/Header'

const App = (): React.JSX.Element => {
  return (
    <div className='todoapp'>
      <Header />
      <Todos />
      <Footer />
    </div>
  )
}

export default App
