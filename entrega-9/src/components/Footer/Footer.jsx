import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__section">
          <h4 className="footer__title">Contáctame</h4>
          <div className="footer__social">
            <a href="#" className="footer__social-link"><FaFacebook /></a>
            <a href="#" className="footer__social-link"><FaInstagram /></a>
            <a href="#" className="footer__social-link"><FaTwitter /></a>
            <a href="#" className="footer__social-link"><FaLinkedin /></a>
          </div>
        </div>
        <div className="footer__section">
          <h4 className="footer__title">Productos</h4>
          <a href="#" className="footer__link">Arte</a>
          <a href="#" className="footer__link">Desarrollo</a>
          <a href="#" className="footer__link">Diseño</a>
          <a href="#" className="footer__link">Ilustración</a>
        </div>
        <div className="footer__section">
          <img src="/Silk1.png" alt="Logo" className="footer__logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;