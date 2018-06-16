import * as actions from './PlayerActions';

export const defaultState = {
  player: new Audio(),
  currentSong: {},
  playing: false,
  visible: false
}

const player = (state=defaultState, action) => {
  switch(action.type) {
    case actions.LOAD_SONG: {
      return {
        ...state,
        currentSong: action.song
      }
    }
    case actions.PLAY_SONG: {
      return {
        ...state,
        playing: true
      }
    }
    case actions.PAUSE_SONG: {
      return {
        ...state,
        playing: false
      }
    }
    case actions.TOGGLE_PLAYER: {
      return {
        ...state,
        visible: !state.visible
      }
    }
    default: return state;
  }
}

export default player;