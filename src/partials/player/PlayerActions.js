export const LOAD_SONG = 'LOAD_SONG';
export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const END_SONG = 'END_SONG';

export const loadSong = (song, audio) => {

  audio.src = song;
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