
import './App.css'
import BarraDePesquisa from './componentes/BarraDePesquisa'
import Sidebar from './componentes/Sidebar'
import Filtro from './componentes/Filtros'
import Ordenacao from './componentes/Ordenacao'

function App() {
  

  return (
    <div className='container'>
    <Sidebar />
    <div>
    <BarraDePesquisa />
    <Filtro />
    <Ordenacao />
    </div>
    </div>
  )
}

export default App
