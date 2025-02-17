import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppPublicar from './AppPublicar.jsx'
// import Sidebar from './componentes/Sidebar'
// import MainPublicar from './componentes/main-publicar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppPublicar />
  </StrictMode>,
)
