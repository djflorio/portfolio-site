import * as actions from './VideoPlayerActions';

export const defaultState = {
  open: false
};

const videoPlayer = (state=defaultState, action) => {
  switch(action.type) {
    case actions.OPEN_VIDEO_PLAYER: {
      return {
        ...state,
        open: true
      }
    }
    case actions.CLOSE_VIDEO_PLAYER: {
      return {
        ...state,
        open: false
      }
    }
    default: return state;
  }
}

export default videoPlayer;