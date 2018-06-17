import * as actions from './PlayerActions';
import reducer, { defaultState } from './PlayerReducer';

describe('Player', () => {

  const testAudio = defaultState.player;
  const testSong = {
    "id": "t1",
    "title": "Coming My Way",
    "file": "http://danflorio.com/uploads/audio/comingmyway.mp3"
  };

  it('should create action to load song', () => {
    expect(actions.loadSong(testSong, testAudio)).toEqual({
      type: actions.LOAD_SONG,
      song: testSong
    });
  });

  it('should create action to play pause song', () => {
    expect(actions.playPause(testAudio)).toEqual({
      type: actions.PLAY_PAUSE
    });
  });

  it('should create action to toggle player', () => {
    expect(actions.togglePlayer()).toEqual({
      type: actions.TOGGLE_PLAYER
    });
  });

  it('should open player when closed with togglePlayer', () => {
    expect(reducer(undefined, actions.togglePlayer())).toEqual({
      ...defaultState,
      visible: true
    });
  });

  it('should close player when open with togglePlayer', () => {

    const openState = {
      ...defaultState,
      visible: true
    }

    expect(reducer(openState, actions.togglePlayer())).toEqual({
      ...openState,
      visible: false
    });

  });

  it('should return state with unrecognized action', () => {
    expect(reducer(undefined, { type: "unexpected" })).toEqual(
      defaultState
    );
  });

});