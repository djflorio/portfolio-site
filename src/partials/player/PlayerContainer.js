import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';

import { loadSong, playSong } from './PlayerActions';

class PlayerContainer extends React.Component {

  componentDidMount() {
    console.log("mount");
    this.props.player.addEventListener('timeupdate', () => {
      //console.log(this.props.player.currentTime / this.props.player.duration);
    })
  }

  render() {
    return (
      this.props.visible &&
      <Player currentAlbum={this.props.currentAlbum} />
    );
  }
}

function mapStateToProps(state) {
  return {
    currentAlbum: state.music.currentAlbum,
    player: state.player.player,
    visible: state.player.visible
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