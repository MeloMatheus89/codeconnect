import './App.css'
import BarraDePesquisa from './componentes/BarraDePesquisa'
import Sidebar from './componentes/Sidebar'
import Filtro from './componentes/Filtros'
import Ordenacao from './componentes/Ordenacao'
import Card from './componentes/Card'

function App() {
  

  return (
    <div className='container'>
    <Sidebar />
    <div>
    <BarraDePesquisa />
    <Filtro />
    <Ordenacao />
    <Card />
    </div>
    </div>
  )
}

export default App
