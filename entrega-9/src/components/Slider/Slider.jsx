import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    { image: "/Sliders1.jpg", caption: "Ilustración" },
    { image: "/Sliders2.jpg", caption: "Desarrollo" },
    { image: "/Sliders3.jpg", caption: "UX/UI" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="slider">
      <div className="slider__container">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slider__slide ${index === currentIndex ? 'slider__slide--active' : ''}`}
          >
            <img src={slide.image} alt={slide.caption} className="slider__image" />
            <h2 className="slider__caption">{slide.caption}</h2>
          </div>
        ))}
      </div>
      <div className="slider__controls">
        {slides.map((_, index) => (
          <span 
            key={index}
            className={`slider__control ${index === currentIndex ? 'slider__control--active' : ''}`}
            onClick={() => goToSlide(index)}
            data-index={index}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Slider;