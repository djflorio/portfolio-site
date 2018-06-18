import * as actions from './PlayerActions';
import reducer, { defaultState } from './PlayerReducer';

describe('Player', () => {

  const player = new Audio();
  player.src = "http://danflorio.com/uploads/audio/comingmyway.mp3";
  const testFunction = () => { return true; }

  const loadTest = {
    ...defaultState,
    player: player,
    playerOpen: true,
    playerLoaded: true,
    playing: true
  }

  it('should create action to play audio', () => {
    expect(actions.playAudio(player)).toEqual({
      type: actions.PLAY_AUDIO
    });
  });

  it('should ignore audio play if no player', () => {
    expect(actions.playAudio()).toEqual({
      type: null
    });
  });

  it('should create action to pause audio', () => {
    player.play();
    expect(actions.pauseAudio(player)).toEqual({
      type: actions.PAUSE_AUDIO
    });
  });

  it('should create action to load song', () => {
    expect(actions.loadSong(
      { title: "test" },
      player,
      testFunction
    )).toEqual({
      type: actions.LOAD_SONG,
      song: { title: "test" }
    });
  });

  it('should create action to close player', () => {
    expect(actions.closePlayer(player)).toEqual({
      type: actions.CLOSE_PLAYER
    });
  });

  it('should close player with closePlayer', () => {
    expect(reducer(loadTest, actions.closePlayer(player))).toEqual({
      player: new Audio(),
      playing: false,
      playPercent: 0,
      currentTime: 0,
      playerOpen: false,
      playerLoaded: false,
      currentSong: {}
    });
  });

  it('should create action to end song', () => {
    expect(actions.endSong()).toEqual({
      type: actions.END_SONG
    });
  });

  it('should set playing to false with endSong', () => {
    expect(reducer(loadTest, actions.endSong())).toEqual({
      ...loadTest,
      playing: false
    });
  });

  it('should return default state with unexpected action', () => {
    expect(reducer(undefined, { type: "unrecognized" })).toEqual(
      defaultState
    );
  });

});