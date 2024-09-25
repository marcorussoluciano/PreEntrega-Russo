import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/NavBar/CartWidget'

function App() {
  

  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a Skrs Or Love"}/>
    </div>
  )
}

export default App
