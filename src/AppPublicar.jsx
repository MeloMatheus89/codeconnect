import './App.css'
// import BarraDePesquisa from './componentes/BarraDePesquisa'
import Sidebar from './componentes/Sidebar'
// import Filtro from './componentes/Filtros'
// import Ordenacao from './componentes/Ordenacao'
// import Card from './componentes/Card'
// import { useEffect, useState } from 'react'
import MainPublicar from './componentes/main-publicar'

function AppPublicar() {
 

   return (
    <div className='container'>
    <Sidebar />
    <div>
    <MainPublicar />     
   
    </div>
    </div>
  )
}

export default AppPublicar
