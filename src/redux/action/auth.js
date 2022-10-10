import * as api from "../../service/api";
// error and success message
import { errorMessage, successMessage } from "../../utils/message";

// validation user
export const validationUser = (userData) => async (dispatch) => {
  try {
    await api.singIn(userData);
    dispatch({ type: "VALIDATION_USER" });
    successMessage("پیام با موفقیت برای شما ارسال شد");
  } catch (error) {
    //   errorMessage()
    errorMessage("some thing wrong");
    console.log(error.response);
  }
};
// sing in
export const singInUser = (userData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.singIn(userData);
    const result = data?.data?.result;
    dispatch({ type: "SIGN_IN_DONE", payload: result });
    localStorage.setItem("profile", JSON.stringify(data));
    navigate("/dashboard/app", { replace: true });
    successMessage("شما با موفقیت وارد شدید");
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// logout
export const logoutUser = (navigate) => async (dispatch) => {
  try {
    await api.logOut();
    dispatch({ type: "LOG_OUT" });
    localStorage.removeItem("profile");
    successMessage("شما با موفقیت خارج شدید");
    navigate("/", { replace: true });
  } catch (error) {
    errorMessage("مشکلی پیش آمده");
  }
};
