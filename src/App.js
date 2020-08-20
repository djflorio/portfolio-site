import React, {useState, useEffect} from 'react';
import './App.css';

import Main from './partials/main/Main';
import Music from './partials/music/MusicContainer';
import Videos from './partials/videos/VideosContainer';
import Player from './partials/player/PlayerContainer';
import Footer from './partials/footer/Footer';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setScrollY(window.scrollY);
    const handleScroll = () => {
      window.requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Player />
      <Main scrollY={scrollY} />
      <Music scrollY={scrollY} />
      <Videos />
      <Footer />
    </div>
  );
};

export default App;
