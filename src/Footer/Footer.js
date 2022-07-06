
import './Footer.css'


import React, { Component } from 'react';





function Footer() {
  return (
    <div  className='Footer'>
      <footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo">STAY IN TOUCH</h1>
    <a className="footer__btn" href="mailto:example@gmail.com">SUBSCRIBE</a>
    <div>
    <h4>ADDRESS</h4><br/>
    
    <address>
    Level 18, DLF Cyber City, Building No. 5, Tower A, Phase 3, Gurugram - 122002
    <br/><br/>
    </address>
    <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">CONTACT</h2>

      <ul className="nav__ul">
        <li>
          <a href="/">info@triantaluminium.com</a>
        </li>

        <li>
          <a href="/">+91 78888-35707</a>
        </li>
      </ul>
    </li>
    
    
  </ul>
  
  
  </div>
  
  
  
    </div>
    
  <div className="legal">
    <p>&copy; 2019 Something. All rights reserved.</p>
    
    <div className="legal__links">
    </div>
  </div>
</footer>
    </div>
    
  )
}

export default Footer