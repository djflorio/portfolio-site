import React from 'react';
import './Main.css';

import _ from 'lodash';

class Main extends React.Component {

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

    const mainStyle = {
      height: window.innerHeight
    };

    const textStyle = {
      marginTop: -0.5 * this.state.scrollY
    }

    const titleStyle = {
      marginTop: -0.3 * this.state.scrollY
    }

    return (
      <section className="main" style={mainStyle}>
        <span className="main__sun"></span>
        <div className="main__content">
          <h1 className="main__title" style={titleStyle}>
            dan florio
          </h1>
          <p className="main__text" style={textStyle}>
            ...is a solo artist, multi instrumentalist, producer, and
            computer programmer  who writes and records music about dirt,
            nostalgia, dreams, animals, and bodies of water.
          </p>
        </div>
        
        <div className="main__scroll">
          <span className="main__scroll-circle">

          </span>
        </div>
      </section>
    );
  }
}

export default Main;