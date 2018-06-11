import React, { Component } from 'react';
import './App.css';
import Main from './partials/main/Main';

class App extends Component {
  render() {

    const musicStyle = {
      marginTop: window.innerHeight
    };

    return (
      <div className="App">
        <Main />
        <section className="music" style={musicStyle}>
          Music goes here
        </section>
      </div>
    );
  }
}

export default App;
