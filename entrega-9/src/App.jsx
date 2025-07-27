import React from 'react';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Hero from './components/Hero/Hero';
import Pilares from './components/Pilares/Pilares';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Slider />
      <Hero />
      <Pilares />
      <Footer />
    </div>
  );
}

export default App;