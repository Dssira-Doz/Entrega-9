import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Bienvenido a Desira D'oz</h1>
        <p className="hero__text">Diseño, ilustraciones y desarrollo de páginas web</p>
        <a href="#" className="hero__button">Ver más</a>
      </div>
    </section>
  );
};

export default Hero;