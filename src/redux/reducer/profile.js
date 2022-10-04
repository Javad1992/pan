export const profileReducer = (state = { staticAvatars: [] }, action) => {
  switch (action.type) {
    // get all static avatar url
    case "GET_ALL_AVATAR_URL":
      return {
        ...state,
        staticAvatars: action.payload,
      };
    //   upload image
    case "UPLOAD_IMAGE":
      return {
        ...state,
      };
    default:
      return state;
  }
};
