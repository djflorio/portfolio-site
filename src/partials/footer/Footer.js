import React from 'react';
import './Footer.css';

const Footer = () =>{
  const today = new Date();
  const year = today.getFullYear();
  return (
    <section className="footer">
      <p className="footer__copyright">
        &copy; {year} Dan Florio 
      </p>
    </section>
  );
};

export default Footer;