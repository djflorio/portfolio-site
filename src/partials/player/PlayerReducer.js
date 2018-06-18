import * as actions from './PlayerActions';

export const defaultState = {
  player: new Audio(),
  playing: false,
  playPercent: 0,
  currentTime: 0,
  playerLoaded: false,
  playerOpen: false,
  currentSong: {}
}

const player = (state=defaultState, action) => {
  switch(action.type) {
    case actions.PLAY_AUDIO: {
      return {
        ...state,
        playing: true
      }
    }
    case actions.PAUSE_AUDIO: {
      return {
        ...state,
        playing: false
      }
    }
    case actions.LOAD_SONG: {
      return {
        ...state,
        playerOpen: true,
        playerLoaded: true,
        playing: true,
        currentSong: action.song
      }
    }
    case actions.CLOSE_PLAYER: {
      return defaultState;
    }
    case actions.UPDATE_PERCENTAGE: {
      return {
        ...state,
        playPercent: action.percentage
      }
    }
    case actions.END_SONG: {
      return {
        ...state,
        playing: false
      }
    }
    default: return state;
  }
}

export default player;