import axios from 'axios';

export const VIDEOS_FETCH_STARTED = 'VIDEOS_FETCH_STARTED';
export const VIDEOS_FETCH_SUCCEEDED = 'VIDEOS_FETCH_SUCCEEDED';
export const VIDEOS_FETCH_FAILED = 'VIDEOS_FETCH_FAILED';

export const startFetch = () => ({
  type: VIDEOS_FETCH_STARTED
});

export const endFetch = (data) => ({
  type: VIDEOS_FETCH_SUCCEEDED,
  payload: data
});

export const failFetch = () => ({
  type: VIDEOS_FETCH_FAILED
});

export const doFetch = () => {

  let url = "https://www.googleapis.com/youtube/v3/playlistItems";
  url += "?part=snippet&maxResults=50&playlistId=";
  url += "PLOOU7F1-foikp_GIsgXBeC523y-TTc-cl";
  url += "&key=AIzaSyCe7ojEXqyPtbYSLkWh1tqniQKuIXneEWU";

  return (dispatch) => {
    dispatch(startFetch());

    axios({
      method: 'get',
      url: url
    }).then((res) => {
      dispatch(endFetch(res.data));
      console.log(res.data);
    }).catch((err) => {
      dispatch(failFetch());
      console.log(err);
    });
  }
}
