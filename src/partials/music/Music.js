import React from 'react';
import './Music.css';

import Zoom from 'react-reveal/Zoom';

import adaywiser from './img/adaywiser.jpg';
import bigthoughts from './img/bigthoughts.jpg';
import malleability from './img/malleability.jpg';


class Album extends React.Component {
  render() {
    return (
      <Zoom>
      <li className="album">
        <div className="album__header">
          <img className="album__art" src={this.props.art} />
          <span className="album__info">
            <h2 className="album__title">{this.props.title}</h2>
            <h3 className="album__year">{this.props.year}</h3>
          </span>
        </div>
      </li>
      </Zoom>
    );
  }
}


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