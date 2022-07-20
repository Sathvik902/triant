import React from 'react'
import './About.css'
import bgImg from '../Images/15.png'

function About() {
  return (
    <div className='About_Container'>
      <div className='main_name'>
        
        <h1>ABOUT</h1>
        </div>
        <img src={bgImg} alt='bg-img' className='bgImg'/>
    </div>
  )
}

export default About