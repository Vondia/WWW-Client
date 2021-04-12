const initialState = { loading: true, allStories: [] };

export default function allStoriesReducer(state = initialState, action) {
  switch (action.type) {
    case "stories/loadingStart":
      return { ...state, loading: action.payload };

    case "stories/fetched":
      return {
        loading: false,
        allStories: action.payload,
      };

    default:
      return state;
  }
}
