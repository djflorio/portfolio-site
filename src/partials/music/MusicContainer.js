import React from 'react';
import { connect } from 'react-redux';

import { doFetch, setAlbum } from './MusicActions';
import { loadSong, playAudio, pauseAudio, updatePercentage, endSong } from '../player/PlayerActions';

import Music from './Music';

class MusicContainer extends React.Component {

  constructor(props) {
    super(props);

    this.playPauseLoad = this.playPauseLoad.bind(this);
  }

  componentDidMount() {
    this.props.onPageLoad();
  }

  playPauseLoad(song) {
    const {
      playing, currentSong, player, onUpdate, onEnd
    } = this.props;
    if (playing && currentSong.file === song.file) {
      this.props.onPause(player);
    }
    else if (!playing && currentSong.file === song.file) {
      this.props.onPlay(player);
    } else {
      this.props.onLoad(song, player, onUpdate, onEnd);
    } 
  }

  render() {
    return (
      <Music
        albums={this.props.albums}
        currentAlbum={this.props.currentAlbum}
        onAlbumClick={this.props.onAlbumClick}
        onSongClick={this.playPauseLoad}
        player={this.props.player}
        playing={this.props.playing}
        currentSong={this.props.currentSong}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    albums: state.music.data,
    currentAlbum: state.music.currentAlbum,
    player: state.player.player,
    playing: state.player.playing,
    currentSong: state.player.currentSong
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: () => {
      dispatch(doFetch());
    },
    onAlbumClick: (album) => {
      dispatch(setAlbum(album));
    },
    onPlay: (player) => {
      dispatch(playAudio(player));
    },
    onPause: (player) => {
      dispatch(pauseAudio(player));
    },
    onLoad: (song, player, onUpdate, onEnd) => {
      dispatch(loadSong(song, player, onUpdate, onEnd));
    },
    onUpdate: (percentage) => {
      dispatch(updatePercentage(percentage));
    },
    onEnd: () => {
      dispatch(endSong());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicContainer);