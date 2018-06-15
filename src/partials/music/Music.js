import React from 'react';
import classnames from 'classnames';
import './Music.css';

import Zoom from 'react-reveal/Zoom';


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
                    {"album--open": props.currentAlbum.id === album.id}
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
      </div>
    </section>
  );
}

export default Music;