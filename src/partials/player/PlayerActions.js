export const LOAD_SONG = 'LOAD_SONG';
export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const TOGGLE_PLAYER = 'TOGGLE_PLAYER';

export const loadSong = (song, audio) => {

  audio.src = song.file;
  audio.play();

  return {
    type: LOAD_SONG,
    song
  }
}

export const playSong = (audio) => {
  
  if (!audio.playing) {
    audio.play();
  } else {
    audio.pause();
  }

  return {
    type: PLAY_SONG
  }
}

export const pauseSong = (audio) => {
  
  audio.pause();

  return {
    type: PAUSE_SONG
  }
}

export const togglePlayer = () => ({
  type: TOGGLE_PLAYER
});