import React, { useState, useEffect, useRef } from 'react';
import '../Hero.css';
import './Audio.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audioRef with the audio file when the component mounts
    audioRef.current = new Audio("luv.mp3");

    // Cleanup function to pause the audio when the component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const play = () => {
    if (!audioRef.current) return; // Guard clause in case audioRef.current is not initialized
    audioRef.current.play();
    setIsPlaying(true);
  }

  const pause = () => {
    if (!audioRef.current) return; // Guard clause in case audioRef.current is not initialized
    audioRef.current.pause();
    setIsPlaying(false);
  }
  

  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"

  };



  return (
    <>
    
    <div className='hero'>
    < div >
    
    {isPlaying ? (
      <img
        src="pauseB.png"
        alt="Pause"
        onClick={pause}
        style={{ cursor: 'pointer' }}
        className='casseteOne'
      />
    ) : (
      <img
        src="playlife.png"
        alt="Play"
        onClick={play}
        style={{ cursor: 'pointer' }}
        className='cassete'
      />
    )}
  </div >  
     <div className='hero-one'>
     <div className="image-container">
     <a href="">
    <img src="./products/j1.png" alt="Product J1" />
       <p className="hover-text">Olive & Beige Blocked Puffer</p>
       </a>
    </div> 
     <div className="image-container">
       <img src="./products/j2.png" alt="Product J2" />
       <p className="hover-text">Graphite & Slate Blocked Puffer</p>
      </div>
     </div>
     
     <div className='hero-two'>
     <div className="image-container">
       <img src="./products/Puff2.png" />
       <p className="hover-text">Midnight Quilted Bomber</p>
       </div>
       <div className="image-container">
       <img src="./products/Puff1.png" />
       <p className="hover-text">Desert Quilted Bomber</p>
       </div>
     </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
       <img src="./products/Puff3.png" />
       <p className="hover-text">Cloud Quilted Bomber</p>
       </div>
       <div className="image-container">
       <img src="./products/VEST3c.png" />
       <p className="hover-text">Midnight Pocket Gilet</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/VEST4c.png" />
      <p className="hover-text">Safari Pocket Gilet</p>
      </div>
      <div className="image-container">
       <img src="./products/VEST1c.png" />
       <p className="hover-text">Ivory Pocket Gilet</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/VEST2c.png" />
      <p className="hover-text">Commando Pocket Gilet</p>
      </div>
      <div className="image-container">
       <img src="./products/Puffer6.png" />
       <p className="hover-text">Blush Frost Puffer</p>
       </div>
      </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/Puffer3.png" />
      <p className="hover-text">Twilight Insulated Puffer</p>
      </div>
      <div className="image-container">
       <img src="./products/Puffer2.png" />
       <p className="hover-text">Olive Hush Puffer</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/Puffer5.png" />
      <p className="hover-text">Midnight Poise Puffer</p>
      </div>
      <div className="image-container">
       <img src="./products/Puffer1.png" />
       <p className="hover-text">Frost Whisper Puffer</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/Mesh_hoodie.png" />
      <p className="hover-text">Desert Mesh Poncho</p>
      </div>
      <div className="image-container">
       <img src="./products/Mesh_hoodie_b.png" />
       <p className="hover-text">Eclipse Mesh Poncho</p>
       </div>
      </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/black1.png" />
      <p className="hover-text">Midnight Poise Knit Sweater</p>
      </div>
      <div className="image-container">
       <img src="./products/black1_1.png" />
       <p className="hover-text">Sands of Time Knit Sweater</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/White_hoodie.png" />
      <p className="hover-text">Custord Corduroy Hoodie</p>
      </div>
      <div className="image-container">
       <img src="./products/Black_hoodie.png" />
       <p className="hover-text">Midnight Corduroy Hoodie</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/Hoodie_Purple.png" />
      <p className="hover-text">Plum Haze Corduroy Hoodie</p>
      </div>
      <div className="image-container">
       <img src="./products/Sweater2.png" />
       <p className="hover-text">Noir Distressed Frayed Sweater</p>
       </div>
      </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/Sweater1.png" />
      <p className="hover-text">Olive Drab Distressed Frayed Sweater</p>
      </div>
      <div className="image-container">
       <img src="./products/TShirtLong-creme.png" />
       <p className="hover-text">Ivory Stripe Rugby Polo</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/TShirtLong-grey.png" />
      <p className="hover-text">Slate Stripe Rugby Polo</p>
      </div>
      <div className="image-container">
       <img src="./products/Jacket1.png" />
       <p className="hover-text">Pitch Dark Chain Shirt</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/Jacket3.png" />
      <p className="hover-text">Street Ghost Chain Shirt</p>
      </div>
      <div className="image-container">   
       <img src="./products/Jacket2.png" />
       <p className="hover-text">Commando Olive Chain Shirt</p>
       </div>
      </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/sh3.png" />
      <p className="hover-text">Emerald Green Textured Shirt</p>
      </div>

      <div className="image-container">
     
       <img src="./products/sh1.png" />
       <p className="hover-text">Ivory Textured Shirt</p>
       </div>
     
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/sh2.png" />
      <p className="hover-text">Midnight Textured Shirt</p>
      </div>
      <div className="image-container">
       <img src="./products/m1.png" />
       <p className="hover-text">Mauve Suede Shacket</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/m2.png" />
      <p className="hover-text">Charcoal Suede Shackett</p>
      </div>

      <div className="image-container">
       <img src="./products/Mesh_Shirt1.png" />
       <p className="hover-text">Matrix Check Shirt</p>
       </div>
      </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container"> 
      <img src="./products/Mesh_Shirt2.png" />
      <p className="hover-text">Monochrome Check Shirt</p>
      </div>
      <div className="image-container">
       <img src="./products/MO3.png" />
       <p className="hover-text">Forest Green Suede Pocket Shirt</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/MO1.png" />
      <p className="hover-text">Plum Haze Suede Pocket Shirt</p>
      </div>
      <div className="image-container">
       <img src="./products/MO2.png" />
       <p className="hover-text">Charcoal Grey Suede Pocket Shirt</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container"> 
      <img src="./products/pa11.png" />
      <p className="hover-text">Panoramic Porthole Pants</p>
      </div>
      <div className="image-container">
       <img src="./products/Jeans2.png" />
       <p className="hover-text">Eclipse Ripped Jeans</p>
       </div>
      </div>

    </div>   
    
    
    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/py2.png" />
      <p className="hover-text">Slate Shadow Cargo Pants</p>
      </div>
      <div className="image-container">
       <img src="./products/py1.png" />
       <p className="hover-text">Sand Dune Cargo Pants</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/Fur3.png" />
      <p className="hover-text">Desert Explorer Suede Utility Pants </p>
      </div>
      <div className="image-container">
       <img src="./products/Fur2.png" />
       <p className="hover-text">Charcoal Mine Suede Utility Pants</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/Fur1.png" />
      <p className="hover-text">Lavender Feild Suede Utility Pants</p>
      </div>
      <div className="image-container">
       <img src="./products/y1.png" />
       <p className="hover-text">Mustard Seed Cargo Pants</p>
       </div>
      </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/y2.png" />
      <p className="hover-text">Midnight Black Cargo Pants</p>
      </div>
      <div className="image-container">
       <img src="./products/pantss1.png" />
       <p className="hover-text">Tael Blue Layered Pocket Trousers</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/pantss3.png" />
      <p className="hover-text">Crisp White Layered Pocket Trousers</p>
      </div>
      <div className="image-container">
       <img src="./products/pantss2.png" />
       <p className="hover-text">Pitch Dark Layered Pocket Trousers</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/Pantsss2.png" />
      <p className="hover-text">Forest Ranger Cargo Pants</p>
      </div>
      <div className="image-container">
       <img src="./products/Pantsss3.png" />
       <p className="hover-text">Ivory Expidition Cargo Pants</p>
       </div>
      </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/Pantsss1.png" />
      <p className="hover-text">Midnight Expidition Cargo Pants</p>
      </div>
      <div className="image-container">
       <img src="./products/Pants3.png" />
       <p className="hover-text">Coffee Brown Utility Trousers</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/Pants2.png" />
      <p className="hover-text">Ghost White Utility Trousers</p>
      </div>
      <div className="image-container">
       <img src="./products/Pants1.png" />
       <p className="hover-text">Midnight Black Utility Trousers</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/Pj2.png" />
      <p className="hover-text">Mustard Casual Button Trousers</p>
      </div>
      <div className="image-container">
       <img src="./products/Pj1.png" />
       <p className="hover-text">Black Casual Button Trousers</p>
       </div>
      </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/Pj3.png" />
      <p className="hover-text">Nocturnal 10 Pocket Parade</p>
      </div>
      <div className="image-container">
       <img src="./products/Pjwhite.png" />
       <p className="hover-text">Metropolitan Trousers</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/Pjblue.png" />
      <p className="hover-text">Aegean Tidal Trouseres</p>
      </div>
      <div className="image-container">
       <img src="./products/PjBlack.png" />
       <p className="hover-text">Slate Explorer Trousers</p>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
      <img src="./products/f2.png" />
      <p className="hover-text">Jet Black Pinaccle Cargo Pants</p>
      </div>
      <div className="image-container">
       <img src="./products/f1.png" />
       <p className="hover-text">Charcoal Grey Pinaccle Cargo Pants</p>
       </div>
      </div>
    </div>

    


    <div className='cara-one' >
    <Slider arrows = {true}>
      <div>
      <img src="./products/j1.png" alt="Product 1"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/j2.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Puff2.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Puff1.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Puff3.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/VEST3c.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/VEST4c.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/VEST1c.png" alt="Product 1"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/VEST2c.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Puffer6.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Puffer3.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Puffer2.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Puffer5.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Puffer1.png" alt="Product 2"  className='sli-one'/>
      </div>
     
      <div>
      <img src="./products/Mesh_hoodie.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Mesh_hoodie_b.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/black1.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/black1_1.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/White_hoodie.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Black_hoodie.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Hoodie_Purple.png" alt="Product 1"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Sweater2.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Sweater1.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/TShirtLong-creme.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/TShirtLong-grey.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Jacket1.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Jacket3.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Jacket2.png" alt="Product 1"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/sh3.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/sh1.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/sh2.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/m1.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/m2.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Mesh_Shirt1.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/Mesh_Shirt2.png" alt="Product 1"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/MO3.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/MO1.png" alt="Product 2"  className='sli-one'/>
      </div>
      <div>
      <img src="./products/MO2.png" alt="Product 2"  className='sli-one'/>
      </div>
      
   </Slider>
   </div>


   <div className='cara-two'>
    <Slider arrows= {true}>
      <div className='cara-two-div'>
      <img src="./products/pa11.png" alt="Product 1"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/Jeans2.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/py2.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/py1.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/Fur1.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/Fur2.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/Fur3.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/y1.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/y2.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/pantss1.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/pantss2.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/pantss3.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/Pantsss2.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/Pantsss3.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/Pantsss1.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/Pants1.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/Pants2.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/Pants3.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/Pj1.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/Pj2.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/Pj3.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/Pjwhite.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/Pjblue.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/PjBlack.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/Pj1.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/f2.png" alt="Product 2"  className='sli-two'/>
      </div>
      <div>
      <img src="./products/f1.png" alt="Product 2"  className='sli-two'/>
      </div>

   </Slider>
   </div>



 



    </>
  )
}

export default Hero
