import axios from 'axios';

export const VIDEOS_FETCH_STARTED = 'VIDEOS_FETCH_STARTED';
export const VIDEOS_FETCH_SUCCEEDED = 'VIDEOS_FETCH_SUCCEEDED';
export const VIDEOS_FETCH_FAILED = 'VIDEOS_FETCH_FAILED';

export const startVideosFetch = () => ({
  type: VIDEOS_FETCH_STARTED
});

export const endVideosFetch = (data) => ({
  type: VIDEOS_FETCH_SUCCEEDED,
  payload: data
});

export const failVideosFetch = () => ({
  type: VIDEOS_FETCH_FAILED
});

export const doFetch = (dispatch) => {
  let url = "https://www.googleapis.com/youtube/v3/playlistItems";
  url += "?part=snippet&maxResults=50&playlistId=";
  url += "PLOOU7F1-foikp_GIsgXBeC523y-TTc-cl";
  url += "&key=AIzaSyCe7ojEXqyPtbYSLkWh1tqniQKuIXneEWU";

  dispatch(startVideosFetch());

  axios({
    method: 'get',
    url: url
  }).then((res) => {
    dispatch(endVideosFetch(res.data.items));
  }).catch((err) => {
    dispatch(failVideosFetch());
    // TODO: Handle error
    console.log(err);
  });
}
