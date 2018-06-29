import axios from 'axios';

export const VIDEOS_FETCH_STARTED = 'VIDEOS_FETCH_STARTED';
export const VIDEOS_FETCH_SUCCEEDED = 'VIDEOS_FETCH_SUCCEEDED';
export const VIDEOS_FETCH_FAILED = 'VIDEOS_FETCH_FAILED';
export const LOAD_VIDEO = 'LOAD_VIDEO';

const extractData = (video) => {
  const vid = video.snippet;
  const currentVideo = {
    title: vid.title,
    description: vid.description,
    vId: vid.resourceId.videoId
  };
  return currentVideo;
}

export const startVideosFetch = () => ({
  type: VIDEOS_FETCH_STARTED
});

export const endVideosFetch = (data) => {
  let currentVideo = {
    title: "",
    description: "",
    vId: ""
  };

  if (data.length > 0) {
    currentVideo = extractData(data[0]);
  }

  return {
    type: VIDEOS_FETCH_SUCCEEDED,
    videos: data,
    currentVideo: currentVideo
  }
};

export const failVideosFetch = () => ({
  type: VIDEOS_FETCH_FAILED
});

export const loadVideo = (video) => ({
  type: LOAD_VIDEO,
  video: extractData(video)
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
