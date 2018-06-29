import React from 'react';
import { connect } from 'react-redux';
import { doFetch, loadVideo } from './VideosActions';
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
        currentVideo={this.props.currentVideo}
        onVideoClick={this.props.onVideoClick}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    fetching: state.videos.fetching,
    videos: state.videos.videos,
    currentVideo: state.videos.currentVideo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      doFetch(dispatch);
    },
    onVideoClick: (video) => {
      dispatch(loadVideo(video));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosContainer);