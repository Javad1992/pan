export const expertServiceReducer = (
  state = { experts: [], expertsReject: [] },
  action
) => {
  switch (action.type) {
    case "GET_ALL_EXPERTS":
      return {
        ...state,
        experts: action.payload,
      };
    case "GET_ALL_REJECT_EXPERT":
      return {
        ...state,
        expertsReject: action.payload,
      };
    case "GET_ARCHIVE_EXPERT":
      return {
        ...state,
        archiveExpert: action.payload,
      };
    case "DETAIL_REQUEST_EXPERT":
      return {
        ...state,
        expert: action.payload,
      };
    case "REJECT_REQUEST_EXPERT_LOADING":
      return {
        ...state,
        rejectLoading: true,
      };
    case "REJECT_REQUEST_EXPERT":
      return {
        ...state,
      };
    case "REJECT_REQUEST_EXPERT_LOADING":
      return {
        ...state,
        rejectLoading: false,
      };

    case "CONFIRM_REQUEST_EXPERT_LOADING":
      return {
        ...state,
        confirmLoading: true,
      };

    case "CONFIRM_REQUEST_EXPERT":
      return {
        ...state,
      };

    case "CONFIRM_REQUEST_EXPERT_RESET":
      return {
        ...state,
        confirmLoading: false,
      };

    case "ADD_TO_ARCHIVE_LOADING":
      return {
        ...state,
        addArchiveLoading: true,
      };

    case "ADD_TO_ARCHIVE":
      return {
        ...state,
      };

    case "RESER_TO_ARCHIVE_LOADING":
      return {
        ...state,
        addArchiveLoading: false,
      };

    case "REMOVE_FROM_ARCHIVE_LOADING":
      return {
        ...state,
        removeLoading: true,
      };
    case "REMOVE_FROM_ARCHIVE":
      return {
        ...state,
      };

    case "RESET_FROM_ARCHIVE_LOADING":
      return {
        ...state,
        removeLoading: false,
      };

    case "RESET_FROM_ARCHIVE_LOADING":
      return {
        ...state,
        removeLoading: false,
      };

    case "SEARCH_EXPERT":
      return {
        ...state,
        experts: action.payload,
      };

    default:
      return state;
  }
};
