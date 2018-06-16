import { combineReducers } from 'redux';

import music from './partials/music/MusicReducer';
import player from './partials/player/PlayerReducer';

export default combineReducers({
  music,
  player
});