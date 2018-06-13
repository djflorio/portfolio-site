import React from 'react';
import './Main.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import chevronDown from '@fortawesome/fontawesome-free-solid/faChevronCircleDown';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      heroHeight: window.innerHeight
    };
  }

  render() {

    const mainStyle = {
      height: this.state.heroHeight
    };

    const textStyle = {
      marginLeft: -0.5 * this.props.scrollY
    }

    const titleStyle = {
      marginLeft: -0.3 * this.props.scrollY
    }

    const sunStyle = {
      marginLeft: 0.4 * this.props.scrollY
    }

    return (
      <section className="main" style={mainStyle}>
        <span className="main__sun" style={sunStyle}></span>
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
          <FontAwesomeIcon
            icon={chevronDown}
            className="main__scroll-circle"
          />
        </div>
      </section>
    );
  }
}

export default Main;