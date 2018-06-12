import React from 'react';
import './Music.css';

import adaywiser from './img/adaywiser.jpg';
import bigthoughts from './img/bigthoughts.jpg';
import malleability from './img/malleability.jpg';


class Music extends React.Component {

  constructor(props) {
    super(props);
    this.albumRef = React.createRef();

    this.state = {
      visible: false
    };
  }

  componentWillUpdate() {
    if (this.albumRef.current.offsetTop - this.props.scrollY < 350) {
      if (!this.state.visible) {
        this.setState({ visible: true });
      }
    } else {
      if (this.state.visible) {
        this.setState({ visible: false });
      }
    }
  }

  render() {

    const style = {
      opacity: this.state.visible ? 1 : 0
    }

    return (
      <section className="music" ref={this.albumRef}>
        <ul className="albums" style={style}>
          <li className="album">
            <img className="album__art" src={adaywiser} />
          </li>
          <li className="album">
            <img className="album__art" src={malleability} />
          </li>
          <li className="album">
            <img className="album__art" src={bigthoughts} />
          </li>
        </ul>
      </section>
    );
  }
}

export default Music;