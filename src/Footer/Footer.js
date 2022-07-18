import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Footer/Footer.css'




function Footer() {
  return (
    <div>
<footer className="page-footer font-small blue pt-4">

<hr/>
  <div className="container-fluid text-center text-md-left">

  
    <div className="row">

      <hr className="clearfix w-100 d-md-none pb-3"/>

      <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase">CONTACT</h5>

        <ul className="list-unstyled">
          <li>
            <a href="/!"className='footer_links'><FontAwesomeIcon icon="fa-solid fa-phone" />+91 78888-35707</a>
          </li>
          <li>
            <a href="/!"className='footer_links'>info@triantaluminium.com</a>
          </li>
        </ul>

      </div>
      <div className="col-md-6 mt-md-0 mt-3">

       
        <h5 className="text-uppercase">STAY IN TOUCH</h5>
        <p>Subscribe to our newsletter to stay updated about new products.</p>
        <div class="form-group">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
        <br/>
        <button type="submit" size={30} class="btn btn-outline-dark">SUBSCRIBE</button>
      </div>
      </div>
      <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase">ADDRESS</h5>

        <ul className="list-unstyled">
          <li>
            <a href="/!" className='footer_links'>Level 18, DLF Cyber City, Building No. 5, Tower A, Phase 3, Gurugram - 122002</a>
          </li>
        </ul>

      </div>
    </div>
  </div>
  

 
  <div className="footer-copyright text-center py-3">
    <h6>Copyright 2020 © Triant Aluminium. All rights reserved.</h6>
    
  </div>
  

</footer>

    </div>
    
  )
}

export default Footer