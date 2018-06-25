import React from 'react';
import { connect } from 'react-redux';
import { doFetch } from './VideosActions';
import Videos from './Videos';

class VideosContainer extends React.Component {

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <Videos />
    );
  }
}

function mapStateToProps(state) {
  return {
    fetching: state.videos.fetching
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
)(VideosContainer);