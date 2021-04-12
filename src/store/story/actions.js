import axios from "axios";

const apiUrl = process.env.API_URL || "//localhost:4000";

export function oneStory(data) {
  return {
    type: "story/fetched",
    payload: data,
  };
}

export function fetchStory(storyId) {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/stories/${storyId}`);

    dispatch(oneStory(response.data));
    console.log("Action one story data", response.data);
  };
}
