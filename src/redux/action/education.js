import * as api from "../../service/education";
import { errorMessage } from "../../utils/message";

export const allExpertEducation = (page, searchTerm) => async (dispatch) => {
  try {
    const { data } = await api.getExpertEducation(page, searchTerm);
    const result = data?.data?.result;
    dispatch({ type: "GET_ALL_EXPERT", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

export const detailExpertEducation = (uid) => async (dispatch) => {
  try {
    const { data } = await api.getDetailExpert(uid);
    const result = data?.data?.result;
    dispatch({ type: "GET_DETAIL_EXPERT", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};
