import React from 'react';
import { connect } from 'react-redux';

import { doFetch, setAlbum } from './MusicActions';
import { loadSong, playPause } from '../player/PlayerActions';

import Music from './Music';

class MusicContainer extends React.Component {

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <Music
        albums={this.props.albums}
        currentAlbum={this.props.currentAlbum}
        onAlbumClick={this.props.onAlbumClick}
        onSongClick={this.props.onSongClick}
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
    onLoad: () => {
      dispatch(doFetch());
    },
    onAlbumClick: (album) => {
      dispatch(setAlbum(album));
    },
    onSongClick: (song, player) => {
      if (player.src === song.file) {
        dispatch(playPause(player));
      } else {
        dispatch(loadSong(song, player));
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicContainer);