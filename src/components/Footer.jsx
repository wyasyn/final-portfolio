import React from 'react'
import { Logo, SocialMedia } from "../components"
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='footer'>
      <div className="footer-container container">
              <Logo />

            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/about" >About</Link>
              </li>
              <li>
                <Link to="/services" >Services</Link>
              </li>
              <li>
                <Link to="/portfolio" >Portfolio</Link>
              </li>
              <li>
                <Link to="/blog" >Blog</Link>
              </li>
              <li>
                <Link to="/contact" >Contact</Link>
              </li>
            </ul>

                  <SocialMedia />

                  <p>&copy; {currentYear} All Rights Reserved</p>
      </div>

    </footer>
  )
}

export default Footer