import React from 'react'
import './main_page.css'
import bgImg from '../Images/building-1834709_1920-1.jpg'
import Img1 from '../Images/G135A-30.jpg'
import Img2 from '../Images/G135A-3.jpg'
import Img3 from '../Images/ZD81-3.jpg'
import Img4 from '../Images/G135A-30.jpg'
import window from "../Images/3-copy.png"
// "C:\Users\Sathvik K\OneDrive\Desktop\Triant_website1\src\Images\G135A-3.jpg"
import door from "../Images/2-copy.png"
import curtain from "../Images/7-copy.1.png"
import gates from "../Images/5-copy.1.png"


function main_page() {
  return (
    <div className='Home_container'>
        <div className='main_name'>
        
        <h1>TRIANT ALUMINIUM</h1>
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
            </div>
            <div className='row'>
            <div className='col-md-12'>
            <button type="button" className="btn btn-lg btn-outline-dark btn_coustom">VIEW PRODUCTS</button>
            </div>
            </div>
                    </div>
                    <div className='row slider_content'>
                        <div className='col-md-3'>
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src={door} alt="First slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={window} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={curtain} alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
            </div>
            <div className='col-md-8'>
                <h1 id ="Future">THE FUTURE IS NOW</h1>
                <br/>
                <hr id='hr'/>
                <p id ='disc_Future'>Introducing the ground-breaking Thermal-Break Technology, our systems are unmatched in energy efficiency and performance. Our comprehensive product portfolio consists of high-quality doors, windows, facades, skylights, wall claddings, railings and other architectural products.</p>
                <br/>
                <button type="button" className="btn btn-lg btn-outline-dark btn_coustom">Learn More</button>
            </div>
            <div className="container text-center">
            <h1 id='futured_products'>FUTURED PRODUCTS</h1>
            <hr id='futured_hr'/>
            </div>
            <div className="container">
  <div className="row row1">
    <div className="col-md">
    
      <img src={Img1} className='Imgs'/>
    </div>
    <div className="col-md">
        <a href='#'/>
    <img src={Img2} className='Imgs'/>
    </div>
    <div className="col-md">
    <a href='#'/>
    <img src={Img3} className='Imgs'/>
    </div>
    <div className="col-md">
    <a href='#'/>
    <img src={Img4} className='Imgs'/>
    </div>
  </div>
  <button type="button" className="btn btn-lg btn-outline-dark btn_coustom">VIEW ALL PRODUCTS</button>
</div>
</div>
          
    </div>

  )
}

export default main_page