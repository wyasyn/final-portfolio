import React, {useState} from 'react'
import {  NavLink } from "react-router-dom"
import { Logo, SocialMedia} from "../components"
import {  FaTimes } from 'react-icons/fa'

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <div className="navbar">
      <div className="navbar-container container">

        <Logo />

        <div className='menu_icon open' onClick={handleClick}>
            <img src="img/menu.png" alt='menu' />
        </div>



      <div className={click ? "nav-menu move" : "nav-menu"}>

        <div className="menu_icon close" onClick={closeMobileMenu}>
          <FaTimes />
        </div>

      <div className="aside">
      <small className='subhead'>
          get in touch
      </small>
      <h2>
          Social media and E-mail
      </h2>
      <SocialMedia />
      </div>
      <ul className="menu_bar">
      <li className='navItem' onClick={closeMobileMenu}>
        <NavLink to="/" className='nav-links'>Home</NavLink>
      </li>
      <li className='navItem' onClick={closeMobileMenu}>
        <NavLink to="/about" className='nav-links'>About</NavLink>
      </li>
      <li className='navItem' onClick={closeMobileMenu}>
        <NavLink to="/services" className='nav-links'>Services</NavLink>
      </li>
      <li className='navItem' onClick={closeMobileMenu}>
        <NavLink to="/portfolio" className='nav-links'>Portfolio</NavLink>
      </li>
      <li className='navItem' onClick={closeMobileMenu}>
        <NavLink to="/blog" className='nav-links'>Blog</NavLink>
      </li>
      <li className='navItem'onClick={closeMobileMenu}>
        <NavLink to="/contact" className='nav-links'>Contact</NavLink>
      </li>
    </ul>
    </div>
      </div>
    </div>
    </>
  )
}

export default Navbar