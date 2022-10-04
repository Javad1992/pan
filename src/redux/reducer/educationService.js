export const educationReducer = (
  state = { experts: [], expert: {} },
  action
) => {
  switch (action.type) {
    case "GET_ALL_EXPERT":
      return {
        ...state,
        experts: action.payload,
      };
    case "GET_DETAIL_EXPERT":
      return {
        ...state,
        expert: action.payload,
      };
    default:
      return state;
  }
};
