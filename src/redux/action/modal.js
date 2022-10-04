// open modal
export const openModal = (id) => (dispatch) => {
  dispatch({ type: "OPEN_MODAL" });
  dispatch({ type: "UPDATED_VISIT_REQUEST", payload: id });
};
// close modal
export const closeModal = () => (dispatch) => {
  dispatch({ type: "CLOSE_MODAL" });
};

// open modal personal
export const openModalPersonalEdit = (id) => (dispatch) => {
  dispatch({ type: "OPEN_MODAL_PERSONAL" });
  dispatch({ type: "UPDATED_VISIT_REQUEST", payload: id });
};

// close modal personal
export const closePersonalEdit = () => (dispatch) => {
  dispatch({ type: "CLOSE_MODAL_PERSONAL" });
};

// open confirm cost modal
export const openConfirmCostModal = () => (dispatch) => {
  dispatch({ type: "OPEN_CONFIRM_COST_MODAL" });
};

// close confirm cost modal
export const closeConfirmCostModal = () => (dispatch) => {
  dispatch({ type: "CLOSE_CONFIRM_COST_MODAL" });
  dispatch({ type: "RESET_FINAL_COST" });
};

// reset the confirm cost
export const resetConfirmCost = () => (dispatch) => {
  dispatch({ type: "RESET_FINAL_COST" });
};

// opne famer modal
export const openFarmerModal = () => (dispatch) => {
  dispatch({ type: "OPEN_FAMER_MODAL" });
};

// close famer modal
export const closeFarmerModal = () => (dispatch) => {
  dispatch({ type: "CLOSE_FAMER_MODAL" });
};
// open factor modal
export const openFactorModal = (id) => (dispatch) => {
  dispatch({ type: "OPEN_FACTOR_MODAL" });
  dispatch({ type: "UPDATED_VISIT_REQUEST", payload: id });
};

// close factor modal
export const closeFactorModal = () => (dispatch) => {
  dispatch({ type: "CLOSE_FACTOR_MODAL" });
};

// -------------------------------------EXPERT MODAL---------------------------------
// open expert modal
export const openExpertModal = (id) => (dispatch) => {
  dispatch({ type: "OPEN_EXPERT_MODAL" });
  dispatch({ type: "UPDATED_VISIT_REQUEST", payload: id });
};

// close expert modal
export const closeExpertModal = () => (dispatch) => {
  dispatch({ type: "CLOSE_EXPERT_MODAL" });
  dispatch({ type: "RESET_EXPERT" });
};

// -------------------------------archive modal-----------------------------
// open archive modal
export const openArchiveModal = (id) => (dispatch) => {
  dispatch({ type: "GET_VISIT_CODE", payload: id });
  dispatch({ type: "OPEN_ARCHIVE_MODAL" });
};

// close archive modal
export const closeArchiveModal = () => (dispatch) => {
  dispatch({ type: "CLOSE_ARCHIVE_MODAL" });
};

// open gis modal
export const openGisModal = (id) => (dispatch) => {
  dispatch({ type: "UPDATE_VISIT_REQUEST_GIS", payload: id });
  dispatch({ type: "OPEN_GIS_MODAL" });
};

// close gis modal
export const closeGisModal = () => (dispatch) => {
  dispatch({ type: "CLOSE_GIS_MODAL" });
};

// open report file modal
export const openReportFileModal = (visitCode) => (dispatch) => {
  dispatch({ type: "OPEN_REPORT_FILE_MODAL" });
  dispatch({ type: "GET_SINGLE_GIS_FILE", payload: visitCode });
};

// close report file modal
export const closeReportFileModal = () => (dispatch) => {
  dispatch({ type: "CLOSE_REPORT_FILE_MODAL" });
};

// -----------------------archive questionnaire--------------------------
export const openArchiveQuestionModal = (data) => (dispatch) => {
  dispatch({ type: "OPEN_ARCHIVE_QUESTION_MODAL", payload: data });
};

// close archive modal
export const closeArchiveQuestionModal = () => (dispatch) => {
  dispatch({ type: "CLOSE_ARCHIVE_QUESTION_MODAL" });
};

// open modal meal plan
export const openMealPlanModal = () => (dispatch) => {
  dispatch({ type: "OPEN_MEAL_PLAN_MODAL" });
};
// close moeal moeal plan
export const closeMealPlanModal = () => (dispatch) => {
  dispatch({ type: "CLOSE_MEAL_PLAN_MODAL" });
};

// open update detail request expert
export const openUpdateRequestExpert = () => (dispatch) => {
  dispatch({ type: "OPEN_UPDATE_DETAIL_REQUEST_EXPERT" });
};

// close update detail request expert
export const closeUpdateRequestExpert = () => (dispatch) => {
  dispatch({ type: "CLOSE_UPDATE_DETAIL_REQUEST_EXPERT" });
};

// open reject expert modal
export const openExpertLevelBackModal = () => async (dispatch) => {
  dispatch({ type: "OPEN_REJECT_EXPERT_LEVEL_BACK" });
};

// close reject expert modal
export const closeExpertLevelBackModal = () => async (dispatch) => {
  dispatch({ type: "CLOSE_REJECT_EXPERT_LEVEL_BACK" });
};
