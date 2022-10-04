export const modalReducer = (
  state = {
    isOpen: false,
    isOpenExpert: false,
    isOpenFarmer: false,
    isOpenFactor: false,
    isOpenArchive: false,
    isOpenCostModal: false,
    isOpenReportModal: false,
    isOpenMealPlanModal: false,
    isOpenMealPlanReject: false,
    isOpenArchiveQuestionModal: false,
  },
  action
) => {
  switch (action.type) {
    // open modal
    case "OPEN_MODAL":
      return {
        isOpen: true,
      };
    // close modal
    case "CLOSE_MODAL":
      return {
        isOpen: false,
      };

    // open modal
    case "OPEN_MODAL_PERSONAL":
      return {
        isOpenPersonalModal: true,
      };

    // close modal
    case "CLOSE_MODAL_PERSONAL":
      return {
        isOpenPersonalModal: false,
      };

    // open confirm cost modal
    case "OPEN_CONFIRM_COST_MODAL":
      return {
        isOpenCostModal: true,
      };
    // close confirm cost modal
    case "CLOSE_CONFIRM_COST_MODAL":
      return {
        isOpenCostModal: false,
      };

    // open farmer modal
    case "OPEN_FAMER_MODAL":
      return {
        isOpenFarmer: true,
      };

    // close farmer modal
    case "CLOSE_FAMER_MODAL":
      return {
        isOpenFarmer: false,
      };

    // open factor modal
    case "OPEN_FACTOR_MODAL":
      return {
        isOpenFactor: true,
      };
    // close factor modal
    case "CLOSE_FACTOR_MODAL":
      return {
        isOpenFactor: false,
      };

    // open expert modal
    case "OPEN_EXPERT_MODAL":
      return {
        isOpenExpert: true,
      };

    // close expert modal
    case "CLOSE_EXPERT_MODAL":
      return {
        isOpenExpert: false,
      };

    // open archive modal
    case "OPEN_ARCHIVE_MODAL":
      return {
        isOpenArchive: true,
      };

    // close archive modal
    case "CLOSE_ARCHIVE_MODAL":
      return {
        isOpenArchive: false,
      };

    // open gis modal
    case "OPEN_GIS_MODAL":
      return {
        isOpenGisModal: true,
      };

    // close gis modal
    case "CLOSE_GIS_MODAL":
      return {
        isOpenGisModal: false,
      };

    // open report file modal
    case "OPEN_REPORT_FILE_MODAL":
      return {
        isOpenReportModal: true,
      };

    // close report file modal
    case "CLOSE_REPORT_FILE_MODAL":
      return {
        isOpenReportModal: false,
      };
    // open archive questionnaire modal
    case "OPEN_ARCHIVE_QUESTION_MODAL":
      return {
        isOpenArchiveQuestionModal: true,
        archive: action.payload,
      };

    // close archive questionnaire modal
    case "CLOSE_ARCHIVE_QUESTION_MODAL":
      return {
        isOpenArchiveQuestionModal: false,
      };

    // open meal plan modal
    case "OPEN_MEAL_PLAN_MODAL":
      return {
        isOpenMealPlanModal: true,
      };

    // close meal plan modal
    case "CLOSE_MEAL_PLAN_MODAL":
      return {
        isOpenMealPlanModal: false,
      };
    // open modal reject meal plan
    case "OPEN_REJECT_MEAL_PLAN_MODAL":
      return {
        isOpenMealPlanReject: true,
      };

    // close modal reject meal plan
    case "CLOSE_REJECT_MEAL_PLAN_MODAL":
      return {
        isOpenMealPlanReject: false,
      };
    // open update detail request expert
    case "OPEN_UPDATE_DETAIL_REQUEST_EXPERT":
      return {
        isOpenDetailRequestExpert: true,
      };
    // close update detail request expert
    case "CLOSE_UPDATE_DETAIL_REQUEST_EXPERT":
      return {
        isOpenDetailRequestExpert: false,
      };

    case "OPEN_REJECT_EXPERT_LEVEL_BACK":
      return {
        isOpenExpertLevelBack: true,
      };

    case "CLOSE_REJECT_EXPERT_LEVEL_BACK":
      return {
        isOpenExpertLevelBack: false,
      };

    default:
      return state;
  }
};
