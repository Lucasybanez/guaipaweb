import { useState } from 'react'
import './App.css'
import Inicio from './pages/Inicio/Inicio'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Registro from './pages/Registro/Registro'
import InicioSesion from './pages/InicioSesion/InicioSesion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registro />
    </>
  )
}

export default App
