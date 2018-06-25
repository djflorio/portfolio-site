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
      <Videos
        videos={this.props.videos}
        fetching={this.props.fetching}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    fetching: state.videos.fetching,
    videos: state.videos.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      doFetch(dispatch);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosContainer);