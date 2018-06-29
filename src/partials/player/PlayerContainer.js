// Node modules
import React from 'react';
import { connect } from 'react-redux';

// Actions
import { playAudio, pauseAudio, closePlayer } from './PlayerActions';

// Components
import Player from './Player';


class PlayerContainer extends React.Component {

  constructor(props) {
    super(props);

    this.onScrub = this.onScrub.bind(this);
  }

  onScrub(e) {
    const timeline = document.querySelector('.player__trackbar');
    let left = timeline.getBoundingClientRect().left;
    let width = timeline.getBoundingClientRect().width;
    let clickPos = e.clientX - left;
    let percentage = clickPos / width;

    this.updateTime(this.props.player.duration * percentage);
  }

  updateTime(time) {
    // If the timeline is clicked before the song is loaded,
    // time will be NaN, which will cause an error. We first
    // check if time is finite to prevent this. As a side note,
    // time really is finite, so stop waiting.
    if (isFinite(time)) {
      this.props.player.currentTime = time;
    }
  }

  render() {
    return (
      this.props.visible &&
      <Player
        currentSong={this.props.currentSong}
        playing={this.props.playing}
        progress={this.props.progress}
        playAudio={() => this.props.playAudio(this.props.player)}
        pauseAudio={() => this.props.pauseAudio(this.props.player)}
        onPlayerCloseClick={() => this.props.closePlayer(this.props.player)}
        onScrub={this.onScrub}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    currentSong: state.player.currentSong,
    player: state.player.player,
    visible: state.player.playerOpen,
    playing: state.player.playing,
    progress: state.player.playPercent
  }
}

function mapDispatchToProps(dispatch) {
  return {
    playAudio: (player) => {
      dispatch(playAudio(player));
    },
    pauseAudio: (player) => {
      dispatch(pauseAudio(player));
    },
    closePlayer: (player) => {
      dispatch(closePlayer(player));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);