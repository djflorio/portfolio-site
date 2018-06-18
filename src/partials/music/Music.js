import React from 'react';
import classnames from 'classnames';
import './Music.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faPause from '@fortawesome/fontawesome-free-solid/faPause';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const Music = (props) => {
  return (
    <section className="music">
      <div className="music__content">
        <Zoom cascade>
          <ul className="albums">
            {
              props.albums.map(album => (
                <li
                  key={album.id}
                  className={classnames(
                    "album",
                    {"album--open": props.currentAlbum === album}
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
            <div className="music__header">
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
                    onClick={()=>props.onSongClick(track, props.player)}>
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
}

export default Music;