import axios from "axios";

const apiUrl = process.env.API_URL || "//localhost:4000";

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
