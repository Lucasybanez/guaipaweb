import { useState } from 'react'
import './App.css'
import Inicio from './pages/Inicio/Inicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inicio />
    </>
  )
}

export default App
