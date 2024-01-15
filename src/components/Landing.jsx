import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import DigitalWatch from './DigitalWatch'

const Landing = () => {
  return (
    <>
    <div className='middle'>
       <div className='para-one'>
         <p className='para-one-text'>. LOOKBOOK . 2024 WINTER FALL COLLECTION . LOOKBOOK . 2024 WINTER FALL COLLECTION . LOOKBOOK . 2024 WINTER FALL COLLECTION . LOOKBOOK . 2024 WINTER FALL COLLECTION . LOOKBOOK . 2024 WINTER FALL COLLECTION . LOOKBOOK . 2024 WINTER FALL COLLECTION</p>
       </div>

       <div className='logo'>
         <img src="blackhole.png"  className='logo-img'/>
         <DigitalWatch />
       </div>


       <Link to= "/main" className='link' >
       <div className='para-two'>
        
          <p className='para-one-text'>. WEB SHOP . 2024 WINTER FALL COLLECTION . WEB SHOP . 2024 WINTER FALL COLLECTION WEB SHOP . 2024 WINTER FALL COLLECTION . WEB SHOP . 2024 WINTER FALL COLLECTION . WEB SHOP . 2024 WINTER FALL COLLECTION WEB SHOP . 2024 WINTER FALL COLLECTION</p>
             
       </div>
       </Link> 

       <img src= "ball1.png"  className='ball1' alt="ball"/>
       <img src= "ball2.png"  className='ball2'/>
       <img src= "ball3.png"  className='ball3'/>
       <img src= "ball1.png"  className='ball4'/>
       <img src= "ball2.png"  className='ball5'/>
       
    </div>
    </>
  )
}

export default Landing
