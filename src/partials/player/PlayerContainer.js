import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';

class PlayerContainer extends React.Component {
  render() {
    return (
      <Player currentAlbum={this.props.currentAlbum} />
    );
  }
}

function mapStateToProps(state) {
  return {
    currentAlbum: state.music.currentAlbum
  }
}

export default connect(
  mapStateToProps
)(PlayerContainer);