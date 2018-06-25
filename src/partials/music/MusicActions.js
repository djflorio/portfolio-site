import axios from 'axios';

export const MUSIC_FETCH_STARTED = 'MUSIC_FETCH_STARTED';
export const MUSIC_FETCH_SUCCEEDED = 'MUSIC_FETCH_SUCCEEDED';
export const MUSIC_FETCH_FAILED = 'MUSIC_FETCH_FAILED';
export const SET_ALBUM = 'SET_ALBUM';

export const startMusicFetch = () => ({
  type: MUSIC_FETCH_STARTED
});

export const endMusicFetch = (data) => ({
  type: MUSIC_FETCH_SUCCEEDED,
  payload: data
});

export const failMusicFetch = () => ({
  type: MUSIC_FETCH_FAILED
});

export const doFetch = () => {
  return (dispatch) => {
    dispatch(startMusicFetch());

    axios({
      method: 'get',
      url: './data.json'
    }).then((res) => {
      dispatch(endMusicFetch(res.data));
    }).catch((err) => {
      dispatch(failMusicFetch());
    });
  }
}

export const setAlbum = (album) => ({
  type: SET_ALBUM,
  album
});