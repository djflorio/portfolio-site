import * as actions from './VideosActions';

export const defaultState = {
  fetching: false,
  videos: [],
  currentVideo: {}
}

const videos = (state=defaultState, action) => {
  switch(action.type) {
    case actions.VIDEOS_FETCH_STARTED: {
      return {
        ...state,
        fetching: true
      }
    }
    case actions.VIDEOS_FETCH_SUCCEEDED: {
      return {
        ...state,
        fetching: false,
        videos: action.videos,
        currentVideo: action.currentVideo
      }
    }
    case actions.VIDEOS_FETCH_FAILED: {
      return {
        ...state,
        fetching: false
      }
    }
    case actions.LOAD_VIDEO: {
      return {
        ...state,
        currentVideo: action.video
      }
    }
    default: return state;
  }
}

export default videos;