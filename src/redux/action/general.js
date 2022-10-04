import * as api from "../../service/api";

// get all province
export const province = () => async (dispatch) => {
  try {
    const { data } = await api.getProvince();
    const result = data?.data?.result?.provinces;
    dispatch({ type: "GET_ALL_PROVINCE_DONE", payload: result });
  } catch (error) {
    dispatch({ type: "GET_ALL_PROVINCE_FAIL", payload: error.response });
  }
};

// get all cities
export const cities = () => async (dispatch) => {
  try {
    const { data } = await api.getCities();
    const result = data?.data?.result?.cities;
    dispatch({ type: "GET_ALL_CITIES_DONE", payload: result });
  } catch (error) {
    dispatch({ type: "GET_ALL_CITIES_FAIL", payload: error.response });
  }
};
// get cities by province
export const citiesByProvince = (id) => async (dispatch) => {
  dispatch({
    type: "GET_CITIES_BY_PROVINCE",
    payload: id,
  });
  dispatch(cities());
};

// get all products
export const allProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getProducts();
    const result = data?.data?.result;
    dispatch({ type: "GET_ALL_PRODUCTS", payload: result });
  } catch (error) {
    console.log(error);
  }
};
