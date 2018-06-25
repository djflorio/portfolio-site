import { combineReducers } from 'redux';

import music from './partials/music/MusicReducer';
import videos from './partials/videos/VideosReducer';
import player from './partials/player/PlayerReducer';

export default combineReducers({
  music,
  videos,
  player
});