export const LOAD_SONG = 'LOAD_SONG';
export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const END_SONG = 'END_SONG';

export const loadSong = (song, audio) => {
  // load the song into web audio
  return {
    type: LOAD_SONG,
    song
  }
}

export const playSong = (audio) => {
  // play the song with web audio
  return {
    type: PLAY_SONG
  }
}

export const pauseSong = (audio) => {
  // pause the audio
  return {
    type: PAUSE_SONG
  }
}