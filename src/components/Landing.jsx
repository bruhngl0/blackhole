import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import DigitalWatch from './DigitalWatch'

const Landing = () => {
  return (
    <>
    
    <div className='middle'>
     
       <div className='para-one'>
       <a href="https://lookbook-un.vercel.app/" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
         <p className='para-one-text'>. LOOK-BOOK . 2024 COLLECTION</p>
         </a>
       </div>
      
       <div className='logo'>
         <img src="blackhole.png"  className='logo-img'/>
         <DigitalWatch />
       </div>
 


       <Link to= "/products"  className='para-two' >
       <div className='para-two'>
          <div className='box'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className='para-one-text'>. WEB-SHOP . 2024 COLLECTION</p>
          
                   
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
