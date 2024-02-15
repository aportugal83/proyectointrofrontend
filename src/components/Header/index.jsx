import React from 'react'
import './header.css'


const Header = () => {

  return (
    <header>
        <nav className="header">
            <a className="header-logo" href="#">Logo NETCHILL</a>
            <ul className="header-nav-list">
                <li>
                  <a className="header-list-link" href="">Home</a>
                </li>
                <li>
                  <a className="header-list-link" href="">About</a>
                  </li>
                <li>
                  <a className="header-list-link is-active" href="">Contact</a>
                </li>
            </ul>
        </nav>
    </header>

  )
}

export default Header