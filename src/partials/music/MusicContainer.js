import React from 'react';
import { connect } from 'react-redux';

import { doFetch } from './MusicActions';

import Music from './Music';

class MusicContainer extends React.Component {

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <Music albums={this.props.albums} />
    );
  }
}

function mapStateToProps(state) {
  return {
    albums: state.music.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(doFetch());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicContainer);