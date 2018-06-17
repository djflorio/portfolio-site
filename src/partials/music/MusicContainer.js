import React from 'react';
import { connect } from 'react-redux';

import { doFetch, setAlbum } from './MusicActions';
import { loadSong } from '../player/PlayerActions';

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
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    albums: state.music.data,
    currentAlbum: state.music.currentAlbum,
    player: state.player.player
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
      dispatch(loadSong(song, player));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicContainer);