import axios from "axios";
import { apiUrl } from "../../config/constants";

export function storyList(data) {
  return {
    type: "stories/fetched",
    payload: data,
  };
}

export function fetchStories() {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/stories`);

    dispatch(storyList(response.data));
  };
}
