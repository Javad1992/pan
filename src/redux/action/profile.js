import * as api from "../../service/api";
// toastify alert
import { errorMessage, successMessage } from "../../utils/message";

// get all static avatar url
export const allAvatarUrl = () => async (dispatch) => {
  try {
    const { data } = await api.getStaticAvatar();
    const result = data?.data?.result;
    dispatch({ type: "GET_ALL_AVATAR_URL", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// upload image file
export const selectImageFile = (imageData) => async (dispatch) => {
  try {
    await api.uploadImage(imageData);
    dispatch({ type: "UPLOAD_IMAGE" });
    successMessage("با موفقیت انتخاب شد");
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};
