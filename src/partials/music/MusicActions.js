import axios from 'axios';

export const FETCH_STARTED = 'FETCH_STARTED';
export const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED';
export const FETCH_FAILED = 'FETCH_FAILED';

export const startFetch = () => ({
  type: FETCH_STARTED
});

export const endFetch = (data) => ({
  type: FETCH_SUCCEEDED,
  payload: data
});

export const failFetch = () => ({
  type: FETCH_FAILED
});

export const doFetch = () => {
  return (dispatch) => {
    dispatch(startFetch());

    axios({
      method: 'get',
      url: './data.json'
    }).then((res) => {
      endFetch(res);
      console.log(res);
      //dispatch(endFetch(res));
    }).catch((err) => {
      failFetch();
      console.error(err);
    });
  }
}