import * as actions from './VideosActions';
import reducer, { defaultState } from './VideosReducer';

describe('Videos', () => {

  const testState = {
    ...defaultState,
    fetching: true
  }

  it('should create action to start fetching music', () => {
    expect(actions.startVideosFetch()).toEqual({
      type: actions.VIDEOS_FETCH_STARTED
    });
  });

  it('should create action for successful retrieval', () => {
    expect(actions.endVideosFetch("data")).toEqual({
      type: actions.VIDEOS_FETCH_SUCCEEDED,
      payload: "data"
    });
  });

  it('should create action for failed retrieval', () => {
    expect(actions.failVideosFetch()).toEqual({
      type: actions.VIDEOS_FETCH_FAILED
    });
  });

  it('should start fetch with startFetch', () => {
    expect(reducer(undefined, actions.startVideosFetch())).toEqual({
      ...defaultState,
      fetching: true
    });
  });

  it('should end fetch with endFetch', () => {
    expect(reducer(testState, actions.endVideosFetch("data"))).toEqual({
      ...testState,
      fetching: false,
      data: "data"
    });
  });

  it('should end fetch with failFetch', () => {
    expect(reducer(testState, actions.failVideosFetch())).toEqual({
      ...testState,
      fetching: false
    });
  });

  it('should return state with unexpected action', () => {
    expect(reducer(testState, { type: "unexpected" })).toEqual(
      testState
    );
  });

});