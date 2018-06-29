// Node modules
import React from 'react';

// Assets
import './Footer.css';


const Footer = () =>{
  const today = new Date();
  const year = today.getFullYear();
  return (
    <section className="footer">
      <p className="footer__copyright">
        Website by&nbsp;
        <a
          className="footer__link"
          href="http://www.danflorio.com"
          target="_blank">
          Dan Florio
        </a>
        <br />
        &copy; {year}
      </p>
    </section>
  );
};

export default Footer;