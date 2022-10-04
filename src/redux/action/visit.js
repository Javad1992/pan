import * as api from "../../service/api";

// error and success message
import { errorMessage, successMessage } from "../../utils/message";
import { allGisFiles } from "./gis";
import {
  closeConfirmCostModal,
  closeFactorModal,
  closeGisModal,
  closeModal,
  openConfirmCostModal,
  resetConfirmCost,
} from "./modal";

// get all visit request
export const fetchAllVisitRequest = () => async (dispatch) => {
  try {
    const { data } = await api.getAllVisitRequest();
    const result = data?.data?.result;
    dispatch({ type: "GET_ALL_VISIT_REQUEST_DONE", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// get single visit request
export const fetchSingleVisitRequest = (parentId) => async (dispatch) => {
  try {
    const { data } = await api.getSingleVisitRequest(parentId);
    const result = data?.data?.result;
    dispatch({ type: "GET_SINGLE_VISIT_REQUEST_DONE", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// update personal information visit request
export const updatedPersonalVisitRequest =
  (parentId, visitData) => async (dispatch) => {
    try {
      await api.updateVistiRequests(parentId, visitData);
      dispatch({ type: "UPDATE_PERSONAL_INFORMATION" });
      dispatch(fetchSingleVisitRequest(parentId));
      dispatch(closeModal());
      successMessage("با موفقیت آپدیت شد");
    } catch (error) {
      errorMessage(error.response.data?.data?.message);
    }
  };

//update public information visit singl request
export const updatedPublicVisitRequest =
  (parentId, visitData) => async (dispatch) => {
    try {
      const { data } = await api.updateVisitRequest(visitData);
      const result = data?.data?.result;
      dispatch({ type: "UPDAETD_VISIT_SINGLE_REQUEST", payload: result });
      dispatch(fetchSingleVisitRequest(parentId));
      dispatch(closeModal());
      successMessage("با موفقیت آپدیت شد");
      dispatch(openConfirmCostModal());
    } catch (error) {
      errorMessage(error.response.data?.data?.message);
    }
  };

// confirm cost visit request

export const confirmCostVisitRequest =
  (parentId, visitCode) => async (dispatch) => {
    try {
      await api.confirmCostApi(visitCode);
      dispatch({ type: "CONFIRM_COST_VISIT_REQUEST" });
      dispatch(fetchSingleVisitRequest(parentId));
      dispatch(closeConfirmCostModal());
      dispatch(resetConfirmCost());
      successMessage("با موفقیت تایید شد");
    } catch (error) {
      errorMessage(error.response.data?.data?.message);
    }
  };

// delete visit request by visit code
export const removeVisitRequest = (parentId, visitCode) => async (dispatch) => {
  try {
    await api.deleteVisitRequest(visitCode);
    dispatch({ type: "DELETE_VISTI_REQUEST", visitCode });
    dispatch(fetchSingleVisitRequest(parentId));
    successMessage("با موفقیت حذف شد");
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// send sms question
export const sendQuestion = (visitCode) => async (dispatch) => {
  try {
    const { data, status } = await api.sendingSms(visitCode);
    const message = data?.data?.message;
    dispatch({ type: "SEND_SMS_QUESTION" });
    if (status === 200) {
      dispatch(confirmVisitRequest(visitCode));
    }
    successMessage(message);
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// add factor
export const generateFactor = (parentId, factorData) => async (dispatch) => {
  try {
    await api.addFactor(factorData);
    dispatch({ type: "ADD_FACTOR" });
    dispatch(fetchSingleVisitRequest(parentId));
    dispatch(closeFactorModal());
    successMessage("فاکتور با موفقیت ثبت شد");
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// updated factor
export const updatedFactorVisit = (parentId, visitCode) => async (dispatch) => {
  try {
    await api.updateFactor(visitCode);
    dispatch({ type: "UPDATE_FACTOR" });
    dispatch(fetchSingleVisitRequest(parentId));
    dispatch(closeFactorModal());
    successMessage("فاکتور با موفقیت ثبت شد");
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// confirm visit request
export const confirmVisitRequest = (visitCode) => async (dispatch) => {
  try {
    await api.confirmVisit(visitCode);
    dispatch({ type: "CONFIRM_VISIT_REQUEST", payload: visitCode });
    successMessage("درخواست بازدید با موفقیت تایید شد");
    dispatch(fetchAllVisitRequest());
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// reject visit request
export const rejectRequest = (visitCode) => async (dispatch) => {
  try {
    await api.rejectVisitRequest(visitCode);
    dispatch({ type: "REJECT_VISIT_REQUEST" });
    successMessage("کاربر با موفقیت به مرحله قبل ارجاع داده شد");
    dispatch(fetchAllVisitRequest());
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// upload gis file
export const uploadGisFile = (formData) => async (dispatch) => {
  try {
    await api.addGisFile(formData);
    dispatch({ type: "UPLOAD_GIS_FILE" });
    successMessage("فایل پیش تحلیل با موفقیت آپلود شد");
    dispatch(fetchAllVisitRequest());
    dispatch(closeGisModal());
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// upload visit report
export const uploadVisitReport = (formData) => async (dispatch) => {
  try {
    await api.addVisitReport(formData);
    dispatch({ type: "UPLOAD_VISIT_REPORT" });
    successMessage("با موفقیت آپلود شد");
    dispatch(allGisFiles());
    dispatch(closeGisModal());
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// get all visit report files
export const allVisitReport = () => async (dispatch) => {
  try {
    await api.getAllVisitReports();
    dispatch({ type: "GET_ALL_VISIT_REPORT" });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};
