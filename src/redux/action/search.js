export const searchAction = (searchTerm) => (dispatch) => {
  dispatch({ type: "SEARCH_TERM", payload: searchTerm });
};
