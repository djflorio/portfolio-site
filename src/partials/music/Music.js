import React from 'react';
import classnames from 'classnames';
import './Music.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faPause from '@fortawesome/fontawesome-free-solid/faPause';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import tree from './img/treeblue.png';
import tree2 from './img/tree2blue.png';
import hare from './img/hare.png';


const Music = (props) => (
  <section className="music">
    <span className="music__header">
      <Fade right>
        <h1 className="music__header-text">
          listen
        </h1>
        <img className="music__hare" src={hare} /> 
      </Fade>
    </span>
    <div className="music__content">
      <Zoom cascade>
        <ul className="albums">
          {
            props.albums.map(album => (
              <li
                key={album.id}
                className={classnames(
                  "album",
                  {"album--open": props.currentAlbum === album},
                  {"album--playing": props.currentAlbum === album && props.playing}
                )}
                onClick={()=>props.onAlbumClick(album)}
              >
                <img
                  className="album__art"
                  src={album.art}
                  alt={album.title}
                />
                <img
                  className="album__record"
                  src={album.record}
                  alt="record"
                />
              </li>
            ))
          }
        </ul>
      </Zoom>
      {
        props.currentAlbum !== null &&
        <div className="music__info">
          <div className="music__album-header">
            <h1 className="music__title">{props.currentAlbum.title}</h1>
            <h2 className="music__year">{props.currentAlbum.year}</h2>
          </div>
          <div className="music__links">
            {
              props.currentAlbum.links.map(link => (
                <a
                  key={link.id}
                  className="music__link"
                  href={link.url}
                  target="_blank">
                  {link.name}
                </a>
              ))
            }
          </div>
          <Fade cascade>
          <ul className="music__tracks">
            {
              props.currentAlbum.tracks.map(track => (
                <li
                  key={track.id}
                  className={classnames(
                    "music__track",
                    {"music__track--playing": props.currentSong === track}
                  )}
                  onClick={()=>props.onSongClick(track)}>
                  <FontAwesomeIcon
                    className="music__icon"
                    icon={props.playing && props.currentSong === track ? faPause : faPlay}
                  />
                  {track.title}
                </li>
              ))
            }
          </ul>
          </Fade>
        </div>
      }
    </div>
  </section>
);

export default Music;