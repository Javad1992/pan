export const sysAdminReducer = (state = { employee: [] }, action) => {
  switch (action.type) {
    case "GET_ALL_EMPLOYEE":
      return {
        ...state,
        employee: action.payload,
      };
    case "ADD_EMPLOYEE_LOADING":
      return {
        ...state,
        addEmployeeLoading: true,
      };
    case "ADD_EMPLOYEE_DONE":
      return {
        ...state,
        addEmployeeLoading: false,
      };

    default:
      return state;
  }
};
