export const visitReducer = (
  state = { visits: [], visit: [], finalCost: "" },
  action
) => {
  switch (action.type) {
    // get all visit request
    case "GET_ALL_VISIT_REQUEST_DONE":
      return {
        ...state,
        visits: action.payload,
      };
    // get single visit request
    case "GET_SINGLE_VISIT_REQUEST_DONE":
      return {
        ...state,
        visit: action.payload,
      };
    case "UPDATE_PERSONAL_INFORMATION":
      return {
        ...state,
      };
    // updaet visit request
    case "UPDATED_VISIT_REQUEST":
      return {
        ...state,
        updatedVisitRequest: state.visit.find(
          (item) => item._id === action.payload
        ),
      };

    // update visit single request
    case "UPDAETD_VISIT_SINGLE_REQUEST":
      return {
        ...state,
        finalCost: action.payload,
      };

    // confirm cost visit request

    case "CONFIRM_COST_VISIT_REQUEST":
      return {
        ...state,
      };

    // reset the final cost
    case "RESET_FINAL_COST":
      return {
        ...state,
        finalCost: "",
      };

    // delete visit request by visit code
    case "DELETE_VISTI_REQUEST":
      return {
        ...state,
        visit: state.visit.filter((item) => item.visitCode !== action.payload),
      };
    // send question SMS
    case "SEND_SMS_QUESTION":
      return {
        ...state,
      };

    // get single visit for update gis
    case "UPDATE_VISIT_REQUEST_GIS":
      return {
        ...state,
        updatedGisVisit: state.visits.find(
          (visit) => visit._id === action.payload
        ),
      };

    // upload gis file
    case "UPLOAD_GIS_FILE":
      return {
        ...state,
      };

    // add factor
    case "ADD_FACTOR":
      return {
        ...state,
      };

    // update factor
    case "UPDATE_FACTOR":
      return {
        ...state,
      };

    default:
      return state;
  }
};
