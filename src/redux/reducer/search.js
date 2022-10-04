export const searchReducer = (state = { searchTerm: "" }, action) => {
  switch (action.type) {
    case "SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};
