import * as api from "../../service/content";
import { errorMessage, successMessage } from "../../utils/message";

// get all contents
export const getContents = () => async (dispatch) => {
  try {
    const { data } = await api.getAllContent();
    const result = data?.data?.result;
    dispatch({ type: "GET_ALL_CONTENT", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// get single content
export const getSingleConten = (sid) => async (dispatch) => {
  try {
    const { data } = await api.singleContent(sid);
    const result = data?.data?.result;
    dispatch({ type: "GET_SINGLE_CONTENT", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// get expert information
export const informationExpert = (expertCode) => async (dispatch) => {
  try {
    const { data } = await api.getInfoExpert(expertCode);
    const result = data?.data?.result;
    dispatch({ type: "GET_INFORMATION_EXPERT", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// confirm content
export const confirmContent = (sid) => async (dispatch) => {
  try {
    await api.confirmedContent(sid);
    dispatch({ type: "CONFIRM_CONTENT" });
    successMessage("با موفقیت تایید شد");
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// delete content
export const removeContent = (sid) => async (dispatch) => {
  try {
    await api.deleteContent(sid);
    dispatch({ type: "DELETE_CONTENT" });
    successMessage("با موفقیت حذف شد");
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

export const allCarriers = () => async (dispatch) => {
  try {
    const { data } = await api.getAllCarriere();
    const result = data?.data?.result;
    dispatch({ type: "GET_ALL_CARRIERS", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

export const getSingleCarrier = (sid) => async (dispatch) => {
  try {
    const { data } = await api.getCarrier(sid);
    const result = data?.data?.result;
    dispatch({ type: "GET_SINGLE_CARRIER", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

export const confirmCarrierStatus = (sid, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "CONFIRM_CARRIER_LOADING" });
    await api.confirmCarrier(sid);
    dispatch({ type: "CONFIRM_CARRIER" });
    navigate("/dashboard/app/manage-page");
    successMessage("با موفقیت انجام شد");
    dispatch({ type: "RESET_CONFIRM_CARRIER_LOADING" });
  } catch (error) {
    errorMessage(error.response?.data?.data?.message);
    dispatch({ type: "RESET_CONFIRM_CARRIER_LOADING" });
  }
};

export const rejectedCarrier = (sid, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "REJECT_CARRIER_LOADING" });
    await api.rejectCarrier(sid);
    dispatch({ type: "REJECT_CARRIER_DONE" });
    navigate("/dashboard/app/manage-page");
    dispatch({ type: "RESET_REJECT_CARRIER" });
  } catch (error) {
    errorMessage(error.response?.data?.data?.message);
    dispatch({ type: "RESET_REJECT_CARRIER" });
  }
};

export const getContentFiles = () => async (dispatch) => {
  try {
    const { data } = await api.getFileContent();
    const result = data?.data?.result;
    dispatch({ type: "GET_CONTENT_FILES", payload: result });
  } catch (error) {
    errorMessage(error.response?.data?.data?.message);
  }
};

export const getSingleContentFile = (id) => async (dispatch) => {
  try {
    const { data } = await api.singleFileContent(id);
    const result = data?.data?.result;
    dispatch({ type: "GET_SINGLE_CONTENT_FILE", payload: result });
  } catch (error) {
    errorMessage(error.response?.data?.data?.message);
  }
};

export const getContentVideos = () => async (dispatch) => {
  try {
    const { data } = await api.getVideoContent();
    const result = data?.data?.result;
    dispatch({ type: "GET_CONTENT_VIDEOS", payload: result });
  } catch (error) {
    errorMessage(error.response?.data?.data?.message);
  }
};

export const getSingleVideo = (id) => async (dispatch) => {
  try {
    const { data } = await api.getSingleVideoContent(id);
    const result = data?.data?.result;
    dispatch({ type: "GET_CONTENT_SINGLE_VIDEOS", payload: result });
  } catch (error) {
    errorMessage(error.response?.data?.data?.message);
  }
};

export const archivedContent = (id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "ARCHIVE_CONTENT_LOADING" });
    await api.archiveContent(id);
    dispatch({ type: "ARCHIVE_CONTENT_DONE" });
    navigate("/dashboard/app");
    dispatch({ type: "RESET_ARCHIVE_CONTENT_LOADING" });
    successMessage("عملیات با موفقیت انجام شد");
  } catch (error) {
    errorMessage(error.response?.data?.data?.message);
  }
};
