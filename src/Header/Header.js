import React from 'react'
import './Header.css'
import Image from '../Images/WHITE-RGB-TRIANT-LOGO-1.jpg'


function Header() {
  return (
    <div className="container">
        {/* <div className = 'Logo'>
            <img src={Image} alt='Logo'/>
        </div> */}
        <div className='Navigation'>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="navbar-nav ml-auto"margin-top='0px'>
    <div className = 'NavContents'>
            <img src={Image} alt='Logo'id='Logo'/>
            <a className='toggle-button'href='/'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </a>
            <div className='NavItems'>
                <ul>
                    <li><a className="nav-link" href="/">HOME </a></li>
                    <li><a className="nav-link" href="/">PRODUCTS </a></li>
                    <li><a className="nav-link" href="/">ABOUT </a></li>
                    <li><a className="nav-link" href="/">CONTACT </a></li>
                </ul>
            </div>    
    </div>
    </div>
  </div>

    

    </nav>
        </div>
    </div>
  )
}

export default Header