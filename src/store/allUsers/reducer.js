import { USER_UPDATED } from "../user/actions";
const initialState = { loading: true, allUsers: [] };

export default function allUsersReducer(state = initialState, action) {
  switch (action.type) {
    case "users/loadingStart":
      return { ...state, loading: action.payload };

    case "users/fetched":
      return {
        loading: false,
        allUsers: action.payload,
      };

    case USER_UPDATED:
      // id van action.payload
      const { id } = action.payload;
      return {
        ...state,
        allUsers: state.allUsers.map((user) => {
          if (user.id !== id) {
            return user;
          }
          return {
            ...user,
            ...action.payload,
          };
        }),
      };

    default:
      return state;
  }
}
