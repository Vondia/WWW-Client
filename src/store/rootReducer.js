import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import allUsersReducer from "./allUsers/reducer";
import allStoriesReducer from "./allStories/reducer";

export default combineReducers({
  appState,
  user,
  allUsers: allUsersReducer,
  allStories: allStoriesReducer,
});
