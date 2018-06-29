import React from 'react';
import './Videos.css';

import placeholder from './img/16x9.png';
import tree from './img/tree.png';
import tree2 from './img/tree2.png';
import Fade from 'react-reveal/Fade';
import YouTube from 'react-youtube';

const VideoPlayer = (props) => (
  <div className="vidplayer">
    <div className="vidplayer__overlay"></div>
    <YouTube videoId={props.videoId} />
  </div>
);

const Videos = (props) => (
  <section className="videos">
    <VideoPlayer videoId={props.currentVideo.vId} />
    <span className="videos__header">
      <img className="videos__tree" src={tree} />
      <img className="videos__tree2" src={tree2} />
      <Fade right>
      <h1 className="videos__header-text">
        videos
      </h1>
      </Fade>
    </span>
    <span className="videos__bg-overlay"></span>
    <ul className="videos__list">
    {
      props.videos.map(video => (
        <Fade key={video.id}>
          <li className="videos__item">
            <img
              className="videos__thumb" 
              src={video.snippet.thumbnails.high.url}
              alt=""
            />
            <span className="videos__overlay">
              <span className="videos__title">
                {video.snippet.title}
              </span>
            </span>
          </li>
        </Fade>
      ))
    }
    </ul>
  </section>
);

export default Videos;