import * as api from "../../service/api";
// toastify alert
import { errorMessage, successMessage } from "../../utils/message";
// signup farmer
export const signupFarmer = (farmerData) => async (dispatch) => {
  try {
    const { data } = await api.regiserFarmer(farmerData);
    const result = data?.data?.result;
    dispatch({ type: "REGISTER_FARMER", payload: result });
    successMessage("با موفقیت ثبت نام شد");
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};
