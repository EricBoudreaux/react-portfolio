import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <nav className='nav'>
        <a href='/' className='site-title'>
            Eric Boudreaux
        </a>
        <ul>
            <li>
                <a href='/about'>About Me</a>
            </li>
            <li>
                <a href='/skills'>Skills</a>
            </li>
            <li>
                <a href='/projects'>Projects</a>
            </li>
            <li>
                <a href='/contact'>Contact</a>
            </li>
        </ul>

  
    </nav>
  )
}

export default Navbar
