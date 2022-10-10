export const questionnaireReducer = (
  state = {
    questionnaires: [],
    count: 0,
    archives: [],
    mealDetail: {},
    questionForm: [],
    allRejectMealPlan: [],
    allEditQuestionnaire: [],
  },
  action
) => {
  switch (action.type) {
    // get all questionnaire
    case "GET_ALL_QUESTIONNAIRES_DONE":
      return {
        ...state,
        questionnaires: state.questionnaires.length > 0 ? state.questionnaires.concat(action.payload.questionnaires.filter(item => !state.questionnaires.some(i => i.Qcode === item.Qcode))) : action.payload.questionnaires,
        count: action?.payload?.count
      };
    case "GET_ALL_MEALPLAN":
      return {
        ...state,
        allEditQuestionnaire: state.allEditQuestionnaire.length > 0 ? state.allEditQuestionnaire.concat(action.payload.mealPlans.filter(item => !state.allEditQuestionnaire.some(i => i.Qcode === item.Qcode))) : action.payload.mealPlans,
        count: action?.payload?.count
      };

    // get reject meal plan
    case "GET_ALL_REJECT_MEALPLAN":
      return {
        ...state,
        allRejectMealPlan: action.payload,
      };

    //   get detail questionnaire
    case "GET_DETAIL_QUESTIONNAIRE":
      return {
        ...state,
        questionnaire: action.payload,
      };

    // waiting questionnaire
    case "WAITING_QUESTIONNAIRE_DONE": {
      return {
        ...state,
        questionnaires: state.questionnaires?.map(
          (questionnaire) =>
            questionnaire.Qcode === action.payload.Qcode
              ? action.payload
              : questionnaire
        ),
      };
    }

    //   archive details questionnaire
    case "ARCHIVE_DETAIL_QUESTIONNAIRE":
      return {
        ...state,
        allRejectMealPlan: state.allRejectMealPlan.map((reject) =>
          reject.Qcode === action.payload.Qcode ? action.payload : reject
        ),
        questionnaires: state.questionnaires.filter(questionnaire => questionnaire.Qcode !== action.payload)
      };

    case "ARCHIVE_DETAIL_QUESTIONNAIRE_EDIT":
      return {
        ...state,
        allEditQuestionnaire: state.allEditQuestionnaire?.mealPlans?.map((reject) => reject.Qcode === action.payload.Qcode ? action.payload : reject),
      };

    case "COMMENT_ON_QUESTIONNAIRE" :
      return {
        ...state,
      }

    //   get all archive
    case "GET_ALL_ARCHIVE_QUESTIONNAIRE":
      return {
        ...state,
        archives: action.payload,
      };

    //   confirm questionnaire
    case "CONFIRM_QUESTIONNAIRE":
      return {
        ...state,
      };

    // upload meal plan loading
    case "UPLOAD_MEAL_PLAN_LOADING":
      return {
        ...state,
        loading: true,
      };

    //   upload meal plan
    case "UPLOAD_MEAL_PLAN":
      return {
        ...state,
        loading: false,
      };

    //   get Meal Plan Detail
    case "GET_MEAL_PLAN_DETAIL":
      return {
        ...state,
        mealDetail: action.payload,
      };

    //   reject meal plan
    case "REJECT_MEAL_PLAN":
      return {
        ...state,
      };
    case "QUESTIONS_FORM_UPDATE":
      return {
        ...state,
        questionForm: { ...state.questionForm, ...action.payload },
      };
    case "UPDATE_QUESTIONNAIRE_LOADING":
      return {
        ...state,
        isLoadingQuestionnaire: true,
      };

    case "UPDATE_QUESTIONNAIRE":
      return {
        ...state,
        isLoadingQuestionnaire: false,
      };
    case "LOG_OUT":
      return {
        questionnaires: [],
        count: 0,
        archives: [],
        mealDetail: {},
        questionForm: [],
        allRejectMealPlan: [],
        allEditQuestionnaire: [],
      };
    case "SIGN_IN_DONE":
      return {
        questionnaires: [],
        count: 0,
        archives: [],
        mealDetail: {},
        questionForm: [],
        allRejectMealPlan: [],
        allEditQuestionnaire: [],
      }
    default:
      return state;
  }
};
