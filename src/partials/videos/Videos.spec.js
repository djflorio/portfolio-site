import * as actions from './VideosActions';
import reducer, { defaultState } from './VideosReducer';

describe('Videos', () => {

  const testState = {
    ...defaultState,
    fetching: true
  };

  const testVideos = [
    {
      snippet: {
        title: "test1",
        description: "d1",
        resourceId: {
          videoId: "id1"
        }
      }
    },
    {
      snippet: {
        title: "test2",
        description: "d2",
        resourceId: {
          videoId: "id2"
        }
      }
    },
    {
      snippet: {
        title: "test3",
        description: "d3",
        resourceId: {
          videoId: "id3"
        }
      }
    }
  ];

  const testCurrentVideo = {
    title: testVideos[0].snippet.title,
    description: testVideos[0].snippet.description,
    vId: testVideos[0].snippet.resourceId.videoId
  }

  it('should create action to start fetching music', () => {
    expect(actions.startVideosFetch()).toEqual({
      type: actions.VIDEOS_FETCH_STARTED
    });
  });

  it('should create action for successful retrieval', () => {
    expect(actions.endVideosFetch(testVideos)).toEqual({
      type: actions.VIDEOS_FETCH_SUCCEEDED,
      videos: testVideos,
      currentVideo: testCurrentVideo
    });
  });

  it('should create action for failed retrieval', () => {
    expect(actions.failVideosFetch()).toEqual({
      type: actions.VIDEOS_FETCH_FAILED
    });
  });

  it('should create action to load video', () => {
    expect(actions.loadVideo(testVideos[0])).toEqual({
      type: actions.LOAD_VIDEO,
      video: testCurrentVideo
    });
  });

  it('should start fetch with startFetch', () => {
    expect(reducer(undefined, actions.startVideosFetch())).toEqual({
      ...defaultState,
      fetching: true
    });
  });

  it('should end fetch with endFetch', () => {
    expect(reducer(testState, actions.endVideosFetch(testVideos))).toEqual({
      ...testState,
      fetching: false,
      videos: testVideos,
      currentVideo: testCurrentVideo
    });
  });

  it('should end fetch with failFetch', () => {
    expect(reducer(testState, actions.failVideosFetch())).toEqual({
      ...testState,
      fetching: false
    });
  });

  it('should set current video with loadVideo', () => {
    expect(reducer(undefined, actions.loadVideo(testVideos[0]))).toEqual({
      ...defaultState,
      currentVideo: testCurrentVideo
    });
  });

  it('should return state with unexpected action', () => {
    expect(reducer(testState, { type: "unexpected" })).toEqual(
      testState
    );
  });

});