// Node modules
import React from 'react';

// Assets
import './Videos.css';
import tree from './img/tree.png';
import tree2 from './img/tree2.png';
import Fade from 'react-reveal/Fade';

// Components
import VideoPlayer from '../video-player/VideoPlayerContainer';


const Videos = (props) => (
  <section className="videos">
    <VideoPlayer currentVideo={props.currentVideo} />
    <span className="videos__header">
      <Fade down>
      <img className="videos__tree" src={tree} />
      <img className="videos__tree2" src={tree2} />
      </Fade>
      <Fade right>
      <h1 className="videos__header-text">
        look
      </h1>
      </Fade>
    </span>
    <span className="videos__bg-overlay"></span>
    <ul className="videos__list">
    {
      props.videos.map(video => (
        <Fade key={video.id}>
          <li
            className="videos__item"
            onClick={() => props.onVideoClick(video)}>
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