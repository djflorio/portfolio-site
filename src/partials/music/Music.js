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
        <ul className="albums">
          <Album
            art={adaywiser}
            title="A Day Wiser"
            year="2017"
          />
          <Album
            art={malleability}
            title="Malleability"
            year="2014"
          />
          <Album
            art={bigthoughts}
            title="Big Thoughts in a Small Place"
            year="2012"
          />
        </ul>
      </section>
    );
  }
}

export default Music;