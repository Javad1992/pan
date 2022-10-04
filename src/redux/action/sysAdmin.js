import * as api from "../../service/sysAdmin";
import { errorMessage, successMessage } from "../../utils/message";

export const allEmployee = () => async (dispatch) => {
  try {
    const { data } = await api.getAllEmployee();
    const result = data?.data?.result;
    dispatch({ type: "GET_ALL_EMPLOYEE", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

export const insertEmployee = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_EMPLOYEE_LOADING" });
    await api.addEmployee(formData);
    dispatch({ type: "ADD_EMPLOYEE_DONE" });
    successMessage("ثبت نام کارمند با موفقیت انجام شد");
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};
