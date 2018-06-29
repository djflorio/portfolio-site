// Node modules
import React from 'react';
import { connect } from 'react-redux';

// Assets
import './VideoPlayer.css';

// Actions
import { closeVideoPlayer } from './VideoPlayerActions';

// Components
import VideoPlayer from './VideoPlayer';


class VideoPlayerContainer extends React.Component {

  render() {
    if (this.props.open) {
      return (
        <VideoPlayer
          currentVideo={this.props.currentVideo}
          onOverlayClick={this.props.onOverlayClick}
        />
      )
    } else {
      return null;
    }
  }
  
};

function mapStateToProps(state) {
  return {
    open: state.videoPlayer.open
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onOverlayClick: () => {
      dispatch(closeVideoPlayer());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayerContainer);