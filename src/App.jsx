import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
        <NavBar/>
        <ItemListContainer rubro = "deportes" talle1 = " | Talle S" talle2 = " | Talle M" generoV = " de varón" generoM = " de mujer"/>
        
    </div>
  )
}

export default App
