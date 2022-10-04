export const farmerReducer = (state = { farmerData: {} }, action) => {
  switch (action.type) {
    // register farmer
    case "REGISTER_FARMER":
      return {
        ...state,
        farmerData: action.payload,
      };
    default:
      return state;
  }
};
