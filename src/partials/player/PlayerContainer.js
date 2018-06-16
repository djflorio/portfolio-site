import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';

import { loadSong, playSong } from './PlayerActions';

class PlayerContainer extends React.Component {

  componentDidMount() {
    //this.props.onLoad("http://danflorio.com/uploads/audio/dreamofmine.mp3", this.props.player);
  }

  render() {
    return (
      <Player currentAlbum={this.props.currentAlbum} />
    );
  }
}

function mapStateToProps(state) {
  return {
    currentAlbum: state.music.currentAlbum,
    player: state.player.player
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: (song, player) => {
      dispatch(loadSong(song, player));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);