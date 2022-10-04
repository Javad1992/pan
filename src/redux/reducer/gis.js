export const gisReducer = (state = { giss: [] }, action) => {
  switch (action.type) {
    case "GET_ALL_GIS_FILES":
      return {
        ...state,
        giss: action.payload,
      };

    //   get single gile file
    case "GET_SINGLE_GIS_FILE":
      return {
        ...state,
        updatedGisFile: state.giss.find(
          (gis) => gis.visitCode === action.payload
        ),
      };

    default:
      return state;
  }
};
