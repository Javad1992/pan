import * as api from "../../service/api";
import { errorMessage } from "../../utils/message";

// get all gis files
export const allGisFiles = () => async (dispatch) => {
  try {
    const { data } = await api.getAllGisFiles();
    const result = data?.data?.result;
    dispatch({ type: "GET_ALL_GIS_FILES", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};
