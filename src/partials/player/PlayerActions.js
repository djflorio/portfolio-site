export const LOAD_SONG = 'LOAD_SONG';
export const PLAY_PAUSE = 'PLAY_PAUSE';
export const OPEN_PLAYER = 'OPEN_PLAYER';
export const CLOSE_PLAYER = 'CLOSE_PLAYER';

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

export const openPlayer = () => ({
  type: OPEN_PLAYER
});

export const closePlayer = (audio) => {
  
  audio.pause();
  
  return {
    type: CLOSE_PLAYER
  }
};