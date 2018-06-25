import * as actions from './VideosActions';

export const defaultState = {
  fetching: false,
  data: []
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
        data: action.payload
      }
    }
    case actions.VIDEOS_FETCH_FAILED: {
      return {
        ...state,
        fetching: false
      }
    }
    default: return state;
  }
}

export default videos;