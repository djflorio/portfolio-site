import React, { Component } from 'react';
import './App.css';

import Main from './partials/main/Main';
import Music from './partials/music/Music';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Music />
      </div>
    );
  }
}

export default App;
