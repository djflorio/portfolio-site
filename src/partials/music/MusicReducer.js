import * as actions from './MusicActions';

export const defaultState = {
  fetching: false,
  data: [],
  currentAlbum: {}
}

const music = (state=defaultState, action) => {
  switch(action.type) {
    case actions.FETCH_STARTED: {
      return {
        ...state,
        fetching: true
      }
    }
    case actions.FETCH_SUCCEEDED: {
      return {
        ...state,
        fetching: false,
        data: action.payload
      }
    }
    case actions.FETCH_FAILED: {
      return {
        ...state,
        fetching: false
      }
    }
    case actions.SET_ALBUM: {
      return {
        ...state,
        currentAlbum: action.album
      }
    }
    default: return state;
  }
}

export default music;