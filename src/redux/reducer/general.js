export const generalReducer = (
  state = {
    province: [],
    city: [],
    selected: [],
    products: [],
  },
  action
) => {
  switch (action.type) {
    case "GET_ALL_PROVINCE_DONE":
      return {
        ...state,
        province: action.payload,
      };
    case "GET_ALL_PROVINCE_FAIL":
      return {
        ...state,
        error: action.payload,
      };
    case "GET_ALL_CITIES_DONE":
      return {
        ...state,
        city: action.payload,
      };
    case "GET_ALL_CITIES_FAIL":
      return {
        ...state,
        error: action.payload,
      };

    //   get cities by province
    case "GET_CITIES_BY_PROVINCE": {
      const cityMatch = state.city.filter(
        (city) => city.province_id == action.payload
      );
      return {
        ...state,
        selected: cityMatch,
      };
    }

    // get products
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
