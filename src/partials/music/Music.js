import React from 'react';
import './Music.css';

import Zoom from 'react-reveal/Zoom';


const Music = (props) => {
  return (
    <section className="music" ref={this.albumRef}>
      <div className="music__content">
        <Zoom cascade>
          <ul className="albums">
            {
              props.albums.map(album => (
                <li key={album.id} className="album">
                  <img
                    className="album__art"
                    src={album.art}
                    alt={album.title}
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