import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';

import { loadSong, playPause, closePlayer } from './PlayerActions';

class PlayerContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    }

    this.updateProgress = this.updateProgress.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(this.updateProgress);
  }

  updateProgress() {
    const currentTime = this.props.player.currentTime;
    const duration = this.props.player.duration;
    this.setState({
      progress: (currentTime/duration) * 100
    });
    requestAnimationFrame(this.updateProgress);
  }

  render() {
    return (
      this.props.visible &&
      <Player
        currentSong={this.props.currentSong}
        playing={this.props.playing}
        player={this.props.player}
        progress={this.state.progress}
        onPlayPauseClick={this.props.onPlayPauseClick}
        onPlayerCloseClick={this.props.onPlayerCloseClick}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    currentSong: state.player.currentSong,
    player: state.player.player,
    visible: state.player.visible,
    playing: state.player.playing
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: (song, player) => {
      dispatch(loadSong(song, player));
    },
    onPlayPauseClick: (player) => {
      dispatch(playPause(player));
    },
    onPlayerCloseClick: (player) => {
      dispatch(closePlayer(player));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);