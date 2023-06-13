import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Tienda Gammer</h1>

        <nav>
            <ul>
                <li>Productos</li>
                <li>Servicios</li>
                <li>Ayuda</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar