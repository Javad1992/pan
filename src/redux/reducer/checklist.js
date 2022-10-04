export const checklistReducer = (
  state = { checklists: [], checklist: {}, archives: [] },
  action
) => {
  switch (action.type) {
    // get all checklists
    case "GET_ALL_CHECKLIST":
      return {
        ...state,
        checklists: action.payload,
      };
    case "GET_DETAIL_CHECKLIST":
      return {
        checklist: action.payload,
      };
    // get all archive checklist
    case "GET_ALL_ARCHIVE_CHECKLIST":
      return {
        ...state,
        archives: action.payload,
      };

    // get single visit checklist
    case "GET_VISIT_CODE":
      return {
        ...state,
        visitCodeChecklist: action.payload,
      };

    default:
      return state;
  }
};
