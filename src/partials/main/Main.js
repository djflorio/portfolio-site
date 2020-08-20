// Node modules
import React from 'react';

// Assets
import './Main.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import chevronDown from '@fortawesome/fontawesome-free-solid/faChevronCircleDown';
import bird from './img/bird.png';

const Main = ({scrollY}) => {
  const heroHeight = window.innerHeight;

  const mainStyle = {
    height: heroHeight,
  };

  const textStyle = {
    marginLeft: -0.5 * scrollY,
  };

  const titleStyle = {
    marginLeft: -0.3 * scrollY,
  };

  const sunStyle = {
    marginLeft: 0.4 * scrollY,
  };

  return (
    <section className="main" style={mainStyle}>
      <span className="main__sun" style={sunStyle}></span>
      <img className="main__bird main__bird--1" src={bird} alt="bird" />
      <img className="main__bird main__bird--2" src={bird} alt="bird" />
      <img className="main__bird main__bird--3" src={bird} alt="bird" />
      <div className="main__content">
        <h1 className="main__title" style={titleStyle}>
          dan florio
        </h1>
        <p className="main__text" style={textStyle}>
          ...is a solo artist, multi instrumentalist, producer, and programmer
          who writes and records music about dirt, nostalgia, dreams, animals,
          and bodies of water.
        </p>
      </div>
      <div className="main__scroll">
        <FontAwesomeIcon icon={chevronDown} className="main__scroll-circle" />
      </div>
    </section>
  );
};

export default Main;
