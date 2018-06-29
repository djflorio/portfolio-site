import * as actions from './VideoPlayerActions';
import reducer, { defaultState } from './VideoPlayerReducer';

describe('Video Player', () => {

  it('should create action to open video player', () => {
    expect(actions.openVideoPlayer()).toEqual({
      type: actions.OPEN_VIDEO_PLAYER
    });
  });

  it('should create action to close video player', () => {
    expect(actions.closeVideoPlayer()).toEqual({
      type: actions.CLOSE_VIDEO_PLAYER
    });
  });

  it('should open player with openVideoPlayer', () => {
    expect(reducer(undefined, actions.openVideoPlayer())).toEqual({
      ...defaultState,
      open: true
    });
  });

  it('should close player with closeVideoPlayer', () => {

    const openState = {
      ...defaultState,
      open: true
    };

    expect(reducer(openState, actions.closeVideoPlayer())).toEqual({
      ...openState,
      open: false
    });
  });

  it('should return state with unrecognized action', () => {
    expect(reducer(defaultState, { type: "unrecognized" })).toEqual(
      defaultState
    );
  });

});