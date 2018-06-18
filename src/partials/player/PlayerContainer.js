import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';

import { loadSong, playSong } from './PlayerActions';

class PlayerContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    }
  }

  componentDidMount() {
    this.props.player.addEventListener('timeupdate', () => {
      const currentTime = this.props.player.currentTime;
      const duration = this.props.player.duration;
      this.setState({
        progress: (currentTime/duration) * 100
      });
    })
  }

  render() {
    return (
      this.props.visible &&
      <Player
        currentSong={this.props.currentSong}
        playing={this.props.playing}
        player={this.props.player}
        progress={this.state.progress}
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);