import React from 'react'
import {Link} from 'react-router-dom'
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
      <Link className="nav-link" to="/">HOME<span className="sr-only">(current)</span></Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/product">PRODUCTS</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about">ABOUT</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/contact">CONTACT</Link>
    </li> 
  </ul>  
</nav>
</div>
  )
}

export default Header