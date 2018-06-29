export const PLAY_AUDIO = "PLAY_AUDIO";
export const PAUSE_AUDIO = "PAUSE_AUDIO";
export const LOAD_SONG = "LOAD_SONG";
export const UPDATE_PERCENTAGE = "UPDATE_PERCENTAGE";
export const UPDATE_TIME = "UPDATE_TIME";
export const CLOSE_PLAYER = "CLOSE_PLAYER";
export const END_SONG = "END_SONG";

export const playAudio = (player) => {
  if (player) { 
    player.play();
    return {
      type: PLAY_AUDIO
    }
  } else {
    return {
      type: null
    }
  }
};

export const pauseAudio = (player) => {
  if (player && player.play() !== undefined) {
    // pause() throws an error if it's called when the audio isn't
    // playing, so we call play() first just to be sure
    player.play().then(() => {
      player.pause();
    })
    .catch(error => {});
  }
  return {
    type: PAUSE_AUDIO
  }
};

export const loadSong = (song, player, onUpdate, onEnd) => {
  player.pause();
  player.src = song.file;
  player.addEventListener("timeupdate", () => {
    const p = 100 * (player.currentTime / player.duration);
    onUpdate(p);
  }, false);
  player.addEventListener("ended", () => {
    onEnd();
  });
  player.play();

  return {
    type: LOAD_SONG,
    song
  }
};

export const closePlayer = (player) => {
  player.pause();
  player.remove();
  return {
    type: CLOSE_PLAYER
  }
};

export const updatePercentage = (percentage) => ({
  type: UPDATE_PERCENTAGE,
  percentage: percentage
});

export const endSong = () => ({
  type: END_SONG
});