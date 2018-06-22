import React, { Component } from 'react';
import './App.css';

import Main from './partials/main/Main';
import Music from './partials/music/MusicContainer';
import Videos from './partials/videos/VideosContainer';
import Player from './partials/player/PlayerContainer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      scrollY: 0
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.setState({
      scrollY: window.scrollY
    });
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    window.requestAnimationFrame(() => {
      this.setState({
        scrollY: window.scrollY
      });
    });
  }


  render() {
    return (
      <div className="App">
        <Player />
        <Main scrollY={this.state.scrollY} />
        <Music scrollY={this.state.scrollY} />
        <Videos />
      </div>
    );
  }
}

export default App;
