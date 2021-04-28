import axios from "axios";
import { fetchStories } from "../allStories/actions";
import { selectToken } from "../user/selectors";
import apiUrl from "../../config/constants";

// export const STORIES_DELETE = "STORIES_DELETE";

export const storyDeleted = (storyId) => ({
  type: "story/storyDeleted",
  payload: storyId,
});

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

export const deleteStory = (storyId) => {
  console.log("storyId line 31", storyId);
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    console.log("token", token);

    try {
      const response = await axios.delete(`${apiUrl}/stories/${storyId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response", response);
      dispatch(storyDeleted(storyId));
      console.log("line 48 storyId", storyId);
      dispatch(fetchStories());
    } catch (e) {
      console.error(e);
    }
  };
};
