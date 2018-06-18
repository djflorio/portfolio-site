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

  it('should create action to open player', () => {
    expect(actions.openPlayer()).toEqual({
      type: actions.OPEN_PLAYER
    });
  });

  it('should create action to close player', () => {
    expect(actions.closePlayer()).toEqual({
      type: actions.CLOSE_PLAYER
    });
  });

  it('should open player with openPlayer', () => {
    expect(reducer(undefined, actions.openPlayer())).toEqual({
      ...defaultState,
      visible: true
    });
  });

  it('should close player with closePlayer', () => {

    const openState = {
      ...defaultState,
      visible: true
    }

    expect(reducer(openState, actions.closePlayer())).toEqual({
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