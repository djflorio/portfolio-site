import React from 'react';
import { connect } from 'react-redux';

import { doFetch, setAlbum } from './MusicActions';

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
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    albums: state.music.data,
    currentAlbum: state.music.currentAlbum
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(doFetch());
    },
    onAlbumClick: (album) => {
      dispatch(setAlbum(album));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicContainer);