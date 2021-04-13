const initialState = { loading: true, allStories: [] };

export default function oneStoryReducer(state = initialState, action) {
  switch (action.type) {
    case "story/loadingStart":
      return { ...state, loading: action.payload };

    case "story/fetched":
      return {
        loading: false,
        allStories: action.payload,
      };

    case "story/storyDeleted":
      return {
        loading: false,
      };

    default:
      return state;
  }
}
