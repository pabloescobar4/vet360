// src/Slideshow.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './slideshow.css';
import sofaYellow from "../assets/sofayellow.png";
import sofaLshape from "../assets/sofaLshape.png";
import sofaColorSection from "../assets/sofaColorSection.png";
import woodenChair from '../assets/woodenChair.png'
import woodenChair2 from '../assets/woodenChair2.png'
const slides = [
  woodenChair ,  woodenChair2 ,sofaYellow,  sofaLshape,woodenChair2
];

const Slideshow = ({setIndex}) => {
  const slideshowRef = useRef(null);
  const sliderRef = useRef(null);
  useEffect(() => {
    const [elements] = slideshowRef.current.children;
    const slides = Array.from(elements.children);
    
    gsap.set(slides, { autoAlpha: 0 });
    gsap.set(slides[0], { autoAlpha: 1 });

    const tl = gsap.timeline({ 
      repeat: -1, 
      onUpdate: () => {
        const newIndex = Math.floor(tl.time() / 3) % slides.length;
        // setCurrentIndex(newIndex);
        setIndex(newIndex);
      }
    });
    slides.forEach((slide, index) => {
   
      tl.to(slide, { autoAlpha: 1, duration: 1, ease: 'expo.inOut' }, index * 3)
        .to(slide, { autoAlpha: 0, duration: 1, ease: 'power2.inOut' }, (index + 1) * 3 - 1);
    });
  }, []);


  return (
    <div className="slideshow-container" ref={slideshowRef}>
      <div className="slides" ref={sliderRef}>
        
        {slides.map((src, index) => {
        return(
          <>
          
        <img key={index} src={src} alt={`Slide ${index + 1}`} style={{borderRadius:"30px"}} />
      
          </>
        )
})}
      </div>
    </div>
  );
};

export default Slideshow;
