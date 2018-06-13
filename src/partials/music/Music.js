import React from 'react';
import './Music.css';

import adaywiser from './img/adaywiser.jpg';
import bigthoughts from './img/bigthoughts.jpg';
import malleability from './img/malleability.jpg';


class Music extends React.Component {

  render() {

    return (
      <section className="music" ref={this.albumRef}>
        <ul className="albums">
          <li className="album">
            <img className="album__art" src={adaywiser} />
          </li>
          <li className="album">
            <img className="album__art" src={malleability} />
          </li>
          <li className="album">
            <img className="album__art" src={bigthoughts} />
          </li>
        </ul>
      </section>
    );
  }
}

export default Music;