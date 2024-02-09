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
    cssEase: "linear",
 

  };

  const settingsOne = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
 

  };



  return (
    <>
    
    <div className='hero'>
 
 <div className='hero-main-one'>
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
   </div>
   <div className='hero-main-two'>
     <div className='hero-one'>
     <div className="image-container">
     <a href="https://611e4e.myshopify.com/products/olive-and-beige-blocked-puffer">
    <img src="./products/j1.png" alt="Product J1" />
       <p className="hover-text">Olive & Beige Blocked Puffer</p>
       </a>
    </div> 
     <div className="image-container">
      <a href = "https://shop.unnssry.xyz/products/graphite-slate-blocked-puffer" >
       <img src="./products/j2.png" alt="Product J2" />
       <p className="hover-text">Graphite & Slate Blocked Puffer</p>
       </a>
      </div>
     </div>
     
     <div className='hero-two'>
     <div className="image-container">
      <a href = "https://shop.unnssry.xyz/products/midnight-quilted-bomber" >
       <img src="./products/Puff2.png" />
       <p className="hover-text">Midnight Quilted Bomber</p>
       </a>
       </div>
       <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/desert-quilted-bomber" >
       <img src="./products/Puff1.png" />
       <p className="hover-text">Desert Quilted Bomber</p>
       </a>
       </div>
     </div>
     </div>
     </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/cloud-quilted-bomber" >
       <img src="./products/Puff3.png" />
       <p className="hover-text">Cloud Quilted Bomber</p>
       </a>
       </div>
       <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/midnight-pocket-gillet" >
       <img src="./products/VEST3c.png" />
       <p className="hover-text">Midnight Pocket Gilet</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/safari-pocket-gilet" >
      <img src="./products/VEST4c.png" />
      <p className="hover-text">Safari Pocket Gilet</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/ivory-pocket-gilet">
       <img src="./products/VEST1c.png" />
       <p className="hover-text">Ivory Pocket Gilet</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/commando-pocket-gilet" >
      <img src="./products/VEST2c.png" />
      <p className="hover-text">Commando Pocket Gilet</p>
      </a>
      </div>
      <div className="image-container">
      <a href = "https://shop.unnssry.xyz/products/blush-frost-puffer">
       <img src="./products/Puffer6.png" />
       <p className="hover-text">Blush Frost Puffer</p>
       </a>
       </div>
      </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/twilight-insulated-puffer" >
      <img src="./products/Puffer3.png"  alt= "puffer"/>
      <p className="hover-text">Twilight Insulated Puffer</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/olive-hush-puffer" >
       <img src="./products/Puffer2.png" />
       <p className="hover-text">Olive Hush Puffer</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/midnight-poise-puffer" >
      <img src="./products/Puffer5.png" />
      <p className="hover-text">Midnight Poise Puffer</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/frost-whisper-puffer" >
       <img src="./products/Puffer1.png" />
       <p className="hover-text">Frost Whisper Puffer</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/desert-mesh-poncho" >
      <img src="./products/Mesh_hoodie.png" />
      <p className="hover-text">Desert Mesh Poncho</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/eclipse-mesh-poncho">
       <img src="./products/Mesh_hoodie_b.png" />
       <p className="hover-text">Eclipse Mesh Poncho</p>
       </a>
       </div>
      </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/midnight-poise-knit-sweater">
      <img src="./products/black1.png" />
      <p className="hover-text">Midnight Poise Knit Sweater</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/sands-of-time-knit-sweater">
       <img src="./products/black1_1.png" />
       <p className="hover-text">Sands of Time Knit Sweater</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/custord-corduroy-hoodie" >
      <img src="./products/White_hoodie.png" />
      <p className="hover-text">Custord Corduroy Hoodie</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/midnight-corduroy-hoodie" >
       <img src="./products/Black_hoodie.png" />
       <p className="hover-text">Midnight Corduroy Hoodie</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/plum-haze-corduroy-hoodie">
      <img src="./products/Hoodie_Purple.png" />
      <p className="hover-text">Plum Haze Corduroy Hoodie</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/noir-distressed-frayed-sweater" >
       <img src="./products/Sweater2.png" />
       <p className="hover-text">Noir Distressed Frayed Sweater</p>
       </a>
       </div>
      </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/olive-drab-distressed-frayed-sweater">
      <img src="./products/Sweater1.png" />
      <p className="hover-text">Olive Drab Distressed Frayed Sweater</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/ivory-stripe-rugby-polo">
       <img src="./products/TShirtLong-creme.png" />
       <p className="hover-text">Ivory Stripe Rugby Polo</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/slate-stripe-rugby-polo" >
      <img src="./products/TShirtLong-grey.png" />
      <p className="hover-text">Slate Stripe Rugby Polo</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/pitch-dark-chain-shirt">
       <img src="./products/Jacket1.png" />
       <p className="hover-text">Pitch Dark Chain Shirt</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/street-ghost-chain-shirt">
      <img src="./products/Jacket3.png" />
      <p className="hover-text">Street Ghost Chain Shirt</p>
      </a>
      </div>
      <div className="image-container"> 
      <a href = "https://shop.unnssry.xyz/products/commando-olive-chain-shirt" >  
       <img src="./products/Jacket2.png" />
       <p className="hover-text">Commando Olive Chain Shirt</p>
       </a>
       </div>
      </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/emerald-green-textured-shirt" >
      <img src="./products/sh3.png" />
      <p className="hover-text">Emerald Green Textured Shirt</p>
      </a>
      </div>

      <div className="image-container">
       <a href = "https://shop.unnssry.xyz/products/ivory-textured-shirt">
       <img src="./products/sh1.png" />
       <p className="hover-text">Ivory Textured Shirt</p>
       </a>
       </div>
     
      </div>

      <div className='page-one-one'>
      <div className="image-container"> 
        <a href = "https://shop.unnssry.xyz/products/midnight-textured-shirt" >
      <img src="./products/sh2.png" />
      <p className="hover-text">Midnight Textured Shirt</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/mauve-suede-shacket">
       <img src="./products/m1.png" />
       <p className="hover-text">Mauve Suede Shacket</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/charcoal-suede-shackett" >
      <img src="./products/m2.png" />
      <p className="hover-text">Charcoal Suede Shackett</p>
      </a>
      </div>

      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/matrix-check-shirt" >
       <img src="./products/Mesh_Shirt1.png" />
       <p className="hover-text">Matrix Check Shirt</p>
       </a>
       </div>
      </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container"> 
      <a href = "https://shop.unnssry.xyz/products/monochrome-check-shirt">
      <img src="./products/Mesh_Shirt2.png" />
      <p className="hover-text">Monochrome Check Shirt</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/forest-green-suede-pocket-shirt" >
       <img src="./products/MO3.png" />
       <p className="hover-text">Forest Green Suede Pocket Shirt</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/plum-haze-suede-pocket-shirt" >
      <img src="./products/MO1.png" />
      <p className="hover-text">Plum Haze Suede Pocket Shirt</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/charcoal-grey-suede-pocket-shirt" >
       <img src="./products/MO2.png" />
       <p className="hover-text">Charcoal Grey Suede Pocket Shirt</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container"> 
      <a href = "https://shop.unnssry.xyz/products/panoramic-porthole-pants" >
      <img src="./products/pa11.png" />
      <p className="hover-text">Panoramic Porthole Pants</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/eclipse-ripped-jeans" >
       <img src="./products/Jeans2.png" />
       <p className="hover-text">Eclipse Ripped Jeans</p>
       </a>
       </div>
      </div>

    </div>   
    
    
    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/slate-shadow-cargo-pants" >
      <img src="./products/py2.png" />
      <p className="hover-text">Slate Shadow Cargo Pants</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/sand-dune-cargo-pants" >
       <img src="./products/py1.png" />
       <p className="hover-text">Sand Dune Cargo Pants</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/desert-explorer-suede-utility-pants">
      <img src="./products/Fur3.png" />
      <p className="hover-text">Desert Explorer Suede Utility Pants </p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/charcoal-mine-suede-utility-pants" >
       <img src="./products/Fur2.png" />
       <p className="hover-text">Charcoal Mine Suede Utility Pants</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/lavender-field-suede-utility-pants">
      <img src="./products/Fur1.png" />
      <p className="hover-text">Lavender Feild Suede Utility Pants</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/mustard-seed-cargo-pants" >
       <img src="./products/y1.png" />
       <p className="hover-text">Mustard Seed Cargo Pants</p>
       </a>
       </div>
      </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/midnight-black-cargo-pants" >
      <img src="./products/y2.png" />
      <p className="hover-text">Midnight Black Cargo Pants</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/tael-blue-layered-pocket-trousers" >
       <img src="./products/pantss1.png" />
       <p className="hover-text">Tael Blue Layered Pocket Trousers</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/crisp-white-layered-pocket-trousers">
      <img src="./products/pantss3.png" />
      <p className="hover-text">Crisp White Layered Pocket Trousers</p>
      </a>
      </div>
      <div className="image-container">
        <a href= "https://shop.unnssry.xyz/products/pitch-dark-layered-pocket-trousers">
       <img src="./products/pantss2.png" />
       <p className="hover-text">Pitch Dark Layered Pocket Trousers</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/forest-ranger-cargo-pants" >
      <img src="./products/Pantsss2.png" />
      <p className="hover-text">Forest Ranger Cargo Pants</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/ivory-expedition-cargo-pants" >
       <img src="./products/Pantsss3.png" />
       <p className="hover-text">Ivory Expidition Cargo Pants</p>
       </a>
       </div>
      </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/midnight-expedition-cargo-pants" >
      <img src="./products/Pantsss1.png" />
      <p className="hover-text">Midnight Expidition Cargo Pants</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/coffee-brown-utility-trousers" >
       <img src="./products/Pants3.png" />
       <p className="hover-text">Coffee Brown Utility Trousers</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/ghost-white-utility-trousers">
      <img src="./products/Pants2.png" />
      <p className="hover-text">Ghost White Utility Trousers</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/midnight-black-utility-trousers" >
       <img src="./products/Pants1.png" />
       <p className="hover-text">Midnight Black Utility Trousers</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/mustard-casual-button-trousers" >
      <img src="./products/Pj2.png" />
      <p className="hover-text">Mustard Casual Button Trousers</p>
      </a>
      </div>
      <div className="image-container">
      <a href = "https://shop.unnssry.xyz/products/black-casual-button-trousers">
       <img src="./products/Pj1.png" />
       <p className="hover-text">Black Casual Button Trousers</p>
       </a>
       </div>
      </div>
    </div>

    <div className='page-one'>
      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/nocturnal-10-pocket-parade">
      <img src="./products/Pj3.png" />
      <p className="hover-text">Nocturnal 10 Pocket Parade</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/metropolitan-trousers" >
       <img src="./products/Pjwhite.png" />
       <p className="hover-text">Metropolitan Trousers</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/aegean-tidal-trousers">
      <img src="./products/Pjblue.png" />
      <p className="hover-text">Aegean Tidal Trouseres</p>
      </a>
      </div>
      <div className="image-container">
        <a href = "https://shop.unnssry.xyz/products/slate-explorer-trousers" >
       <img src="./products/PjBlack.png" />
       <p className="hover-text">Slate Explorer Trousers</p>
       </a>
       </div>
      </div>

      <div className='page-one-one'>
      <div className="image-container">
        <a href= "https://shop.unnssry.xyz/products/jet-black-pinnacle-cargo-pants-1" >
      <img src="./products/f2.png" />
      <p className="hover-text">Jet Black Pinaccle Cargo Pants</p>
      </a>
      </div>
      <div className="image-container">
      <a href= "https://shop.unnssry.xyz/products/jet-black-pinnacle-cargo-pants" >
       <img src="./products/f1.png" />
       <p className="hover-text">Charcoal Grey Pinaccle Cargo Pants</p>
       </a>
       </div>
      </div>
    </div>

    


    <div className='cara-one' >
    <Slider  {...settings}>
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
    <Slider {...settingsOne}>
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


// CustomPrevArrow component

// CustomNextArrow component
