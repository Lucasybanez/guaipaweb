import { useState } from 'react'
import './App.css'
import Inicio from './pages/Inicio/Inicio'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inicio />
      
    </>
  )
}

export default App
