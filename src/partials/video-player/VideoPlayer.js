// Node modules
import React from 'react';
import YouTube from 'react-youtube';

// Assets
import './VideoPlayer.css';


const VideoPlayer = (props) => {

  const {title, description, vId} = props.currentVideo;

  return (
    <div className="vidplayer">
      <div
        className="vidplayer__overlay"
        onClick={props.onOverlayClick}>
      </div>
      <div className="vidplayer__embed-container">
        <div className="vidplayer__embed">
          <YouTube
            className="vidplayer__player"
            videoId={vId}
          />
        </div>
      </div>
      <div
        className="vidplayer__info"
        onClick={props.onOverlayClick}>
        <h2 className="vidplayer__title">
          {title}
        </h2>
        <p className="vidplayer__description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;