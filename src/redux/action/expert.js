import * as api from "../../service/api";
import { errorMessage, successMessage } from "../../utils/message";
import { closeExpertModal } from "./modal";
import { confirmVisitRequest, fetchSingleVisitRequest } from "./visit";


export const editExpert = (editedData, phoneNumber) => async (dispatch) => {
  try {
    const { data } = await api.editExpertData(editedData, phoneNumber);
    console.log(data);
    const result = data?.data?.result;
    dispatch({ type: "EDIT_EXPERT_DATA_DONE", payload: result });
    successMessage("اطلاعات با موفقیت ویرایش  شد");
  } catch (error) {
    dispatch({ type: "EDIT_EXPERT_DATA_FAILED"});
    errorMessage(error.response.data?.data?.message);
  }
}


//search expert
export const searchedExpert = (expertKey, expertValue) => async (dispatch) => {
  try {
    const { data } = await api.searchExpert(expertKey, expertValue);
    console.log(data);
    const result = data?.data?.result;
    dispatch({ type: "GET_ALL_EXPERTS", payload: result });
    successMessage("کارشناسان یافت شده");
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// certail expert
export const cenrtainExpert =
  (parentId, visitCode, expertData) => async (dispatch) => {
    try {
      const { status } = await api.expert(expertData);
      dispatch({ type: "CERTAIL_EXPERT" });
      successMessage("کارشناس با موفقیت تایید شد");
      if (status === 200) {
        confirmVisitRequest(visitCode);
        dispatch(fetchSingleVisitRequest(parentId));
        dispatch(closeExpertModal());
        dispatch({ type: "RESET_EXPERT" });
      }
    } catch (error) {
      errorMessage(error.response.data?.data?.message);
    }
  };
