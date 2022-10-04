import * as api from "../../service/expert";
import { errorMessage, successMessage } from "../../utils/message";
import {
  closeArchiveQuestionModal,
  closeExpertLevelBackModal,
  closeUpdateRequestExpert,
} from "./modal";

export const allExpert = (page, searchTerm) => async (dispatch) => {
  try {
    const { data } = await api.getExperts(page, searchTerm ? searchTerm : "");
    const result = data?.data?.result;
    dispatch({ type: "GET_ALL_EXPERTS", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

export const allRejectExport = (page, searchTerm) => async (dispatch) => {
  try {
    const { data } = await api.getRejectExperts(
      page,
      searchTerm ? searchTerm : ""
    );
    const result = data?.data?.result;
    dispatch({ type: "GET_ALL_REJECT_EXPERT", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

export const allArchiveExpert = (page, searchTerm) => async (dispatch) => {
  try {
    const { data } = await api.getArchiveexpert(
      page,
      searchTerm ? searchTerm : ""
    );
    const result = data?.data?.result;
    dispatch({ type: "GET_ARCHIVE_EXPERT", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

export const detailRequestExpert = (phoneNumber) => async (dispatch) => {
  try {
    const { data } = await api.getDetailRequestExpert(phoneNumber);
    const result = data?.data?.result;
    dispatch({ type: "DETAIL_REQUEST_EXPERT", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

export const rejectExpert =
  (phoneNumber, dataReject, navigate) => async (dispatch) => {
    try {
      dispatch({ type: "REJECT_REQUEST_EXPERT_LOADING" });
      const { data } = await api.rejectRequestExpert(phoneNumber, dataReject);
      const result = data?.data?.result;
      dispatch({ type: "REJECT_REQUEST_EXPERT" });
      navigate("/dashboard/app/list-request-farmer");
      dispatch(closeExpertLevelBackModal());
      dispatch({ type: "REJECT_REQUEST_EXPERT_LOADING" });
      successMessage("با موفقیت برگشت داده شد");
    } catch (error) {
      errorMessage(error.response.data?.data?.message);
    }
  };
// done
export const confirmExpert = (phoneNumber, navigate) => async (dispatch) => {
  try {
    const { data } = await api.confirmRequestExpert(phoneNumber);
    const result = data?.data?.result;
    dispatch({ type: "CONFIRM_REQUEST_EXPERT_LOADING" });
    dispatch({ type: "CONFIRM_REQUEST_EXPERT" });
    navigate("/dashboard/app/list-request-farmer");
    dispatch({ type: "CONFIRM_REQUEST_EXPERT_RESET" });
    successMessage(data?.message);
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};
// done
export const addedToArchive =
  (phoneNumber, archiveDescription, navigate) => async (dispatch) => {
    try {
      dispatch({ type: "ADD_TO_ARCHIVE_LOADING" });
      const { data } = await api.addToArchive(phoneNumber, archiveDescription);
      dispatch({ type: "ADD_TO_ARCHIVE" });
      dispatch(closeArchiveQuestionModal());
      dispatch({ type: "RESER_TO_ARCHIVE_LOADING" });
      navigate("/dashboard/app/list-request-farmer");

      successMessage("با موفقیت بایگانی شد");
    } catch (error) {
      errorMessage(error.response.data?.data?.message);
    }
  };
// done
export const removeFromArchive =
  (phoneNumber, archiveDescription, navigate) => async (dispatch) => {
    try {
      dispatch({ type: "REMOVE_FROM_ARCHIVE_LOADING" });
      const { data } = await api.exitFromArchive(
        phoneNumber,
        archiveDescription
      );
      dispatch({ type: "REMOVE_FROM_ARCHIVE" });

      dispatch(closeArchiveQuestionModal());
      dispatch({ type: "RESET_FROM_ARCHIVE_LOADING" });
      navigate("/dashboard/app/archive-request-farmer");
      dispatch(allArchiveExpert());
      successMessage("با موفقیت از بایگانی خارج شد");
    } catch (error) {
      errorMessage(error.response.data?.data?.message);
    }
  };

export const updatedExpert = (phoneNumber, data) => async (dispatch) => {
  try {
    await api.updateExpert(phoneNumber, data);
    dispatch({ type: "EDIT_DETAIL_EXPERT" });
    dispatch(closeUpdateRequestExpert());
    dispatch(detailRequestExpert(phoneNumber));
    dispatch(allExpert(1, ""));
    dispatch(allRejectExport(1, ""));
    dispatch(allArchiveExpert(1, ""));
    successMessage("با موفقیت آپدیت شد");
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

export const searchedExpert = (query) => async (dispatch) => {
  try {
    const { data } = await api.searchExpert(query);
    const result = data?.data?.result;
    dispatch({ type: "SEARCH_EXPERT", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

export const updateEducationStatus =
  (phoneNumber, data) => async (dispatch) => {
    try {
      await api.updateExpert(phoneNumber, data);
      dispatch({ type: "EDIT_DETAIL_EXPERT" });
      dispatch(closeUpdateRequestExpert());
      dispatch(allExpert(1, ""));
      successMessage("با موفقیت آپدیت شد");
    } catch (error) {
      errorMessage(error.response.data?.data?.message);
    }
  };
