export const LOAD_SONG = 'LOAD_SONG';
export const PLAY_PAUSE = 'PLAY_PAUSE';
export const TOGGLE_PLAYER = 'TOGGLE_PLAYER';

export const loadSong = (song, audio) => {

  audio.src = song.file;
  audio.play();

  return {
    type: LOAD_SONG,
    song
  }
}

export const playPause = (audio) => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }

  return {
    type: PLAY_PAUSE
  }
}

export const togglePlayer = () => ({
  type: TOGGLE_PLAYER
});