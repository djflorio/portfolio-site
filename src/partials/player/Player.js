import React from 'react';
import './Player.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faPause from '@fortawesome/fontawesome-free-solid/faPause';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

const Player = (props) => {
  const { title, album } = props.currentSong;

  return (
    <div className="player">
      <FontAwesomeIcon
        className="player__playpause"
        icon={props.playing ? faPause : faPlay}
        onClick={props.playing ? props.pauseAudio : props.playAudio}
      />
      <div
        className="player__trackbar"
        onClick={props.onScrub}>
        <span
          className="player__progress"
          style={{ width: props.progress + '%' }}>
          <div className="player__info">
            <span className="player__title">{title}</span>
            <span className="player__album">{album}</span>
          </div>
        </span>
        <div className="player__info">
          <span className="player__title">{title}</span>
          <span className="player__album">{album}</span>
        </div>
      </div>
      <FontAwesomeIcon
        className="player__close"
        icon={faTimes}
        onClick={()=>props.onPlayerCloseClick}
      />
    </div>
  );
}

export default Player;