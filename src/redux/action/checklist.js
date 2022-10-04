import * as api from "../../service/api";
import { errorMessage, successMessage } from "../../utils/message";
import { closeArchiveModal } from "./modal";

// all checklist
export const allChecklist = () => async (dispatch) => {
  try {
    const { data } = await api.getAllChecklist();
    const result = data?.data?.result;
    dispatch({ type: "GET_ALL_CHECKLIST", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// get detail checklist
export const detailChecklist = (vistiId) => async (dispatch) => {
  try {
    const { data } = await api.getDetailChecklist(vistiId);
    const result = data?.data?.result;
    dispatch({ type: "GET_DETAIL_CHECKLIST", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// add visit checklist to archive
export const addToArchive = (data) => async (dispatch) => {
  try {
    const { data: info } = await api.addArchiveChecklist(data);
    dispatch({ type: "ADD_ARCHIVE_CHECKLIST" });
    successMessage(info?.data?.message);
    dispatch(closeArchiveModal());
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// get all archive checklist
export const AllArchiveChecklist = () => async (dispatch) => {
  try {
    const { data } = await api.getAllArchiveChecklist();
    const result = data?.data?.result;
    dispatch({ type: "GET_ALL_ARCHIVE_CHECKLIST", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};
