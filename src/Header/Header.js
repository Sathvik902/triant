import React from 'react'

import '../Header/Header.css'
import img from '../Images/WHITE-RGB-TRIANT-LOGO-1.jpg'

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <img src={img} className='navImg' alt='logo'/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
    <ul className="navbar-nav ml-auto">
    
    <li className="nav-item active">
      <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">PRODUCTS</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">ABOUT</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">CONTACT</a>
    </li> 
  </ul>  
</nav>
</div>
  )
}

export default Header