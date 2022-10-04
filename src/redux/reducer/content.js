export const contentReducer = (
  state = { contents: [], content: {}, carriers: [], carrier: {}, files: [] },
  action
) => {
  switch (action.type) {
    // get content
    case "GET_ALL_CONTENT":
      return {
        ...state,
        contents: action.payload,
      };

    // get detail single content
    case "GET_SINGLE_CONTENT":
      return {
        ...state,
        content: action.payload,
      };

    // get information expert
    case "GET_INFORMATION_EXPERT":
      return {
        ...state,
        expertInfo: action.payload,
      };

    // confirm content
    case "CONFIRM_CONTENT":
      return {
        ...state,
      };

    // delete content
    case "DELETE_CONTENT":
      return {
        ...state,
        contents: state.contents?.filter(
          (content) => content?.sid !== action.payload
        ),
      };

    case "GET_ALL_CARRIERS":
      return {
        ...state,
        carriers: action.payload,
      };
    case "GET_SINGLE_CARRIER":
      return {
        ...state,
        carrier: action.payload,
      };

    case "CONFIRM_CARRIER_LOADING":
      return {
        ...state,
        loadingCarrierConfirm: true,
      };
    case "CONFIRM_CARRIER":
      return {
        ...state,
      };
    case "RESET_CONFIRM_CARRIER_LOADING":
      return {
        ...state,
        loadingCarrierConfirm: false,
      };
    case "REJECT_CARRIER_LOADING":
      return {
        ...state,
        rejectLoading: true,
      };
    case "REJECT_CARRIER_DONE":
      return {
        ...state,
      };
    case "RESET_REJECT_CARRIER":
      return {
        ...state,
        rejectLoading: false,
      };

    case "GET_CONTENT_FILES":
      return {
        ...state,
        files: action.payload,
      };

    case "GET_SINGLE_CONTENT_FILE":
      return {
        ...state,
        file: action.payload,
      };

    case "GET_CONTENT_VIDEOS":
      return {
        ...state,
        videos: action.payload,
      };

    case "GET_CONTENT_SINGLE_VIDEOS":
      return {
        ...state,
        video: action.payload,
      };
    case "ARCHIVE_CONTENT_LOADING":
      return {
        ...state,
        loadingArchive: true,
      };
    case "ARCHIVE_CONTENT_DONE":
      return {
        ...state,
      };
    case "RESET_ARCHIVE_CONTENT_LOADING":
      return {
        ...state,
        loadingArchive: false,
      };
    default:
      return state;
  }
};
