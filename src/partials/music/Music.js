import React from 'react';
import './Music.css';

import Zoom from 'react-reveal/Zoom';

import adaywiser from './img/adaywiser.jpg';
import bigthoughts from './img/bigthoughts.jpg';
import malleability from './img/malleability.jpg';


class Music extends React.Component {

  render() {

    return (
      <section className="music" ref={this.albumRef}>
        <div className="music__content">
          <Zoom cascade>
            <ul className="albums">
              <li className="album">
                <img className="album__art" src={adaywiser} alt="a day wiser" />
              </li>
              <li className="album">
                <img className="album__art" src={malleability} alt="a day wiser" />
              </li>
              <li className="album">
                <img className="album__art" src={bigthoughts} alt="a day wiser" />
              </li>
            </ul>
          </Zoom>
        </div>
      </section>
    );
  }
}

export default Music;