import CartWidget from "./CartWidget"
import logo from "../../assets/sneaker.jpg"
import "./navbar.css"


const NavBar = () => {
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="sneaker" width={250}/>
        </div>
        <nav className="containerNav">
          <div>
            <ul className="categories">
                <li>Sneakers</li>
                <li>Accesorios</li>
                <li>Top</li>
                <li>Under</li>
            </ul>
          </div>
          <CartWidget />
        </nav>
    </header>
    
  )
}

export default NavBar