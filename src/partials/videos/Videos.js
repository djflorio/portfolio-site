import React from 'react';
import './Videos.css';

import Fade from 'react-reveal/Fade';

const Videos = (props) => (
  <section className="videos">
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