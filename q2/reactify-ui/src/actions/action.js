import { action_types, urls } from "./constants";
import { Api } from './api';

export const callApi = (action, body, rType = "POST", hasFile = false, fileList = [], hType = 1) => async dispatch => {
  let url, clearData = false, loading = true;
  switch (action) {
    case action_types.LOGIN:
      url = urls.LOGIN_URL;
      clearData = true;
      break;
    case action_types.REGISTER:
      url = urls.REGISTER_URL;
      clearData = true;
      break;
    case action_types.ALL_PEOPLES:
      url = urls.ALL_PEOPLES_URL;
      break;
    case action_types.ALL_TWEETS:
      url = urls.ALL_TWEETS_URL;
      break;
    case action_types.PEOPLE:
      url = urls.PEOPLE_URL;
      break;
    case action_types.TWEET:
      url = urls.TWEET_URL;
      break;
    default:
      dispatch({
        type: action_types.UI_REFRESH
      });
      break;
  }
  try {
    if (loading) {
      dispatch({
        type: action_types.LOADER,
        payload: true
      });
    }
    let response = null;
    response = await Api(url, body, rType);
    console.log("response", response)
    if (response.status_code === 403) {
      dispatch({
        type: action_types.LOGOUT
      });
    } else if (response.status_code === 200) {
      if (clearData) {
        dispatch({
          type: action_types.CLEAR_DATA
        });
      }
      dispatch({
        type: action,
        payload: response
      });
    } else {
      dispatch({
        type: action,
        payload: response
      });
    }
    if (loading) {
      dispatch({
        type: action_types.LOADER,
        payload: false
      });
    }
  } catch (error) {
    console.log(error)
    if (loading) {
      dispatch({
        type: action_types.LOADER,
        payload: false
      });
    }
    // dispatch({
    //     type: action_types.SERVER_ERROR
    // });
  }
};

export const clearData = (type) => async dispatch => {
  dispatch({
    type: type
  });
};

export const updateReducer = (type, data) => async dispatch => {
  dispatch({
    type: type,
    payload: data
  })
};

export const loader = (visibility) => dispatch => {
  switch (visibility) {
    case "show":
      dispatch({
        type: action_types.LOADER,
        payload: true
      });
      break
    default:
      dispatch({
        type: action_types.LOADER,
        payload: false
      });
      break
  }
};
