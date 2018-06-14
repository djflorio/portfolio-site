import * as actions from './MusicActions';
import reducer from './MusicReducer';
import { defaultState } from './MusicReducer';

describe('Music', () => {

  const testState = {
    ...defaultState,
    fetching: true
  }

  it('should create action to start fetching music', () => {
    expect(actions.startFetch()).toEqual({
      type: actions.FETCH_STARTED
    });
  });

  it('should create action for successful retrieval', () => {
    expect(actions.endFetch("data")).toEqual({
      type: actions.FETCH_SUCCEEDED,
      payload: "data"
    });
  });

  it('should create action for failed retrieval', () => {
    expect(actions.failFetch()).toEqual({
      type: actions.FETCH_FAILED
    });
  });

  it('should start fetch with startFetch', () => {
    expect(reducer(undefined, actions.startFetch())).toEqual({
      ...defaultState,
      fetching: true
    });
  });

  it('should end fetch with endFetch', () => {
    expect(reducer(testState, actions.endFetch("data"))).toEqual({
      ...testState,
      fetching: false,
      data: "data"
    });
  });

  it('should end fetch with failFetch', () => {
    expect(reducer(testState, actions.failFetch())).toEqual({
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