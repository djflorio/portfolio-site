import * as actions from './MusicActions';
import reducer, { defaultState } from './MusicReducer';

describe('Music', () => {

  const testState = {
    ...defaultState,
    fetching: true
  }

  it('should create action to start fetching music', () => {
    expect(actions.startMusicFetch()).toEqual({
      type: actions.MUSIC_FETCH_STARTED
    });
  });

  it('should create action for successful retrieval', () => {
    expect(actions.endMusicFetch("data")).toEqual({
      type: actions.MUSIC_FETCH_SUCCEEDED,
      payload: "data"
    });
  });

  it('should create action for failed retrieval', () => {
    expect(actions.failMusicFetch()).toEqual({
      type: actions.MUSIC_FETCH_FAILED
    });
  });

  it('should create action to set current album', () => {
    expect(actions.setAlbum("album")).toEqual({
      type: actions.SET_ALBUM,
      album: "album"
    });
  });

  it('should start fetch with startFetch', () => {
    expect(reducer(undefined, actions.startMusicFetch())).toEqual({
      ...defaultState,
      fetching: true
    });
  });

  it('should end fetch with endFetch', () => {
    expect(reducer(testState, actions.endMusicFetch("data"))).toEqual({
      ...testState,
      fetching: false,
      data: "data"
    });
  });

  it('should end fetch with failFetch', () => {
    expect(reducer(testState, actions.failMusicFetch())).toEqual({
      ...testState,
      fetching: false
    });
  });

  it('should set current album with setAlbum', () => {
    expect(reducer(undefined, actions.setAlbum("album"))).toEqual({
      ...defaultState,
      currentAlbum: "album"
    });
  });

  it('should return state with unexpected action', () => {
    expect(reducer(testState, { type: "unexpected" })).toEqual(
      testState
    );
  });

});