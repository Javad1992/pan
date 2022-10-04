export const expertRecuer = (state = { experts: {} }, action) => {
  switch (action.type) {
    // get all experts
    case "GET_ALL_EXPERTS":
      return {
        ...state,
        experts: action.payload,
      };

    // certaim expert
    case "CERTAIL_EXPERT":
      return {
        ...state,
      };

    case "RESET_EXPERT":
      return {
        experts: {},
      };

    case "EDIT_DETAIL_EXPERT":
      return {
        ...state,
      };

     case "EDIT_EXPERT_DATA_DONE":
       return {
         ...state
       }
    default:
      return state;
  }
};
