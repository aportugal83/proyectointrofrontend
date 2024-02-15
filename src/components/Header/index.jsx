import { NavLink } from 'react-router-dom'
import './header.css'


const Header = () => {
//aqui se agrega una funcion flecha complemento del NavLink de router dom
//condicion ternaria verdadero ?
const linkIsActive = (isActive) => {
  return isActive ? 'header-list-link is-active' : 'header-list-link';
}

  //el navlink sustituye a la etiqueta <a></a>
  return (
    <header>
      <nav className="header">
        
        <NavLink to="/" className="header-logo">Logo NETCHILL</NavLink>

        <ul className="header-nav-list">
          <li>
            <NavLink to="/" className={({isActive}) => linkIsActive(isActive)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => linkIsActive(isActive)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" className={({isActive}) => linkIsActive(isActive)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>

  )
}

export default Header