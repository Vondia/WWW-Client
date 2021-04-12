import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import allUsersReducer from "./allUsers/reducer";
import allStoriesReducer from "./allStories/reducer";
import oneStoryReducer from "./story/reducer";

export default combineReducers({
  appState,
  user,
  allUsers: allUsersReducer,
  allStories: allStoriesReducer,
  oneStory: oneStoryReducer,
});
