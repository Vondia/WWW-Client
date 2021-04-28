import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken, selectUser } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";
export const USER_UPDATED = "USER_UPDATED";
export const STORY_POST_SUCCESS = "STORY_POST_SUCCESS";

const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const userUpdated = (user) => ({
  type: USER_UPDATED,
  payload: user,
});

export const storyPostSuccess = (story) => ({
  type: STORY_POST_SUCCESS,
  payload: story,
});

export const logOut = () => ({ type: LOG_OUT });

export const signUp = (name, email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "Account aangemaakt"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "Welkom terug!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const postStory = (
  name,
  storySentence,
  preziUrl,
  imageUrl,
  question,
  answer1,
  answer2,
  answer3,
  answer4,
  correctAnswer1,
  correctAnswer2,
  correctAnswer3,
  correctAnswer4,
  history
) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());
    // console.log(name, storySentence, preziUrl, imageUrl, question);
    dispatch(appLoading());

    try {
      const response = await axios.post(
        `${apiUrl}/stories`,
        {
          name,
          storySentence,
          preziUrl,
          imageUrl,
          question,
          answer1,
          answer2,
          answer3,
          answer4,
          correctAnswer1,
          correctAnswer2,
          correctAnswer3,
          correctAnswer4,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log("Yep!", response);
      dispatch(
        showMessageWithTimeout("success", false, response.data.message, 3000)
      );
      history.push("/HomePage");
      dispatch(storyPostSuccess(response.data.story));
      dispatch(appDoneLoading());
    } catch (e) {
      console.error(e);
    }
  };
};

export const changeBlockStatus = (id, accountBlocked) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());
    dispatch(appLoading());
    // const accountBlocked = user.accountBlocked;
    // make an axios request to delete
    // and console.log the response if success
    // const {id} = user
    const response = await axios.put(
      `${apiUrl}/users/${id}`,
      {
        accountBlocked,
      },
      console.log("accountBlocked log", accountBlocked),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(
      showMessageWithTimeout("success", false, "Succesvol gewijzigd", 3000)
    );
    dispatch(userUpdated(response.data));
    console.log("do we get it?", response.data);
    dispatch(appDoneLoading());
    //  catch (e) {
    //   console.error(e);
    // }
  };
};
