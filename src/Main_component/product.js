import React from 'react'
import bgImg from '../Images/building-1834709_1920-1.jpg'
import window from "../Images/3-copy.png"
import door from "../Images/2-copy.png"
import curtain from "../Images/7-copy.1.png"
import gates from "../Images/5-copy.1.png"

function Product() {
  return (
    <div>
      <div>
        <div className='Home_container'>
        <div className='main_name'>
        <h1>PRODUCT</h1>
            <p>
                We guarantee the highest quality of workmanship and service across a diverse range of product offerings.
            </p>
        </div>
        <img src={bgImg} alt='bg-img' className='bgImg'/>
        <div className='container_space shadow-lg p-3 mb-5 bg-white rounded'>
            
            <div className='row'>
                <div className='col-md-6'>
                    <img src={window} className='div_imgs' alt='window'/>
                    <h1>WINDOWS</h1>
                    <p>
                    Casement Windows, Sliding Windows, Awning Windows, Tilt-n-Turn Windows, Fixed Windows.
                    </p>
                </div>
                <div className='col-md-6'>
                <img src={door} alt='doors' className='div_imgs'/>
                    <h1>DOORS</h1>
                    <p>
                    Sliding Doors, Casement Doors, Slide-n-Fold Doors
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                <img src={curtain} alt='curtain_walls'className='div_imgs'/>
                <h1>CURTAIN WALLS</h1>
                <p>
                Stick Curtain Walls, Semi-unitized Curtain Walls, Unitized Curtain Walls
                </p>
                </div>
                <div className='col-md-6'>
                <img src={gates} alt='gates'className='div_imgs'/>
                <h1>GATES</h1>
                <p>
                Aluminium Sliding and Casement Gates
                </p>
                </div>
                <br/>
                <button type="button" class="btn btn-secondary btn-lg">VIEW PRODUCTS</button>
            </div>
        </div>
    </div>
    </div>

    </div>
  )
}

export default Product