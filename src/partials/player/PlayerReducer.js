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
        currentSong: action.song,
        playing: !state.player.paused
      }
    }
    case actions.PLAY_PAUSE: {
      return {
        ...state,
        playing: !state.player.paused
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