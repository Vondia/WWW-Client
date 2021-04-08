import axios from "axios";

const apiUrl = process.env.API_URL || "//localhost:4000";

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
