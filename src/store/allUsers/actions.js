import axios from "axios";
import { apiUrl } from "../../config/constants";

export function userList(data) {
  return {
    type: "users/fetched",
    payload: data,
  };
}

export function fetchUsers() {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/users`);

    dispatch(userList(response.data));
  };
}
