import * as actions from './MusicActions';

export const defaultState = {
  fetching: false,
  data: [],
  currentAlbum: null
}

const music = (state=defaultState, action) => {
  switch(action.type) {
    case actions.MUSIC_FETCH_STARTED: {
      return {
        ...state,
        fetching: true
      }
    }
    case actions.MUSIC_FETCH_SUCCEEDED: {
      return {
        ...state,
        fetching: false,
        data: action.payload
      }
    }
    case actions.MUSIC_FETCH_FAILED: {
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