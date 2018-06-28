import React from 'react';
import './Videos.css';

import placeholder from './img/16x9.png';
import tree from './img/tree.png';
import Fade from 'react-reveal/Fade';

const Videos = (props) => (
  <section className="videos">
    <img className="videos__tree" src={tree} />
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