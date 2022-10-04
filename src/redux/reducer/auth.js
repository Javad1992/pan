export const authReducer = (
  state = { authData: {}, validation: false },
  action
) => {
  switch (action.type) {
    //   validation user
    case "VALIDATION_USER":
      return {
        ...state,
        validation: true,
      };
    // sing in user
    case "SIGN_IN_DONE":
      return {
        ...state,
        validation: true,
        authData: action.payload,
      };
    // Logout
    case "LOG_OUT":
      return {
        validation: false,
        authData: {},
      };

    //   return default state
    default:
      return state;
  }
};
