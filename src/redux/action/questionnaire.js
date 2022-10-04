import * as api from "../../service/api";
import { errorMessage, successMessage } from "../../utils/message";
import { closeArchiveQuestionModal, closeMealPlanModal } from "./modal";
import {commentOnQuestionnaire} from "../../service/api";

export const allQuestionnaire =
  (pageNumber, fullName, phoneNumber, product) => async (dispatch) => {
    dispatch({ type: "GET_ALL_QUESTIONNAIRES_LOADING" });
    try {
      const { data } = await api.getAllQuestionnaire(
        pageNumber,
        fullName,
        phoneNumber,
        product
      );
      const result = data?.data?.result;
      dispatch({ type: "GET_ALL_QUESTIONNAIRES_DONE", payload: result });
    } catch (error) {
      dispatch({ type: "GET_ALL_QUESTIONNAIRES_FAILED" });
      errorMessage(error.response.data?.data?.message);
    }
  };

// get detail questionnaire
export const detailQuestionnaire = (Qcode) => async (dispatch) => {
  try {
    const { data } = await api.getDetailQuestionnaire(Qcode);
    const result = data?.data?.result;
    dispatch({ type: "GET_DETAIL_QUESTIONNAIRE", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// waiting a questionnaire
export const toWaitingQuestionnaire = (Qcode, flag, i) => async (dispatch) => {
  try {
    const { data } = await api.waitingQuestionnaire(Qcode, flag);
    const result = data?.data?.result;
    dispatch({ type: "WAITING_QUESTIONNAIRE_DONE", payload: result });
    successMessage("وضعیت با موفقیت تغییر کرد");
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// archive a questionnaire
export const archiveQuestion = (mode, Qcode, comment, navigate) => async (dispatch) => {
  try {
    await api.archiveQuestionnaire(mode, Qcode, comment);
    dispatch({ type: "ARCHIVE_DETAIL_QUESTIONNAIRE",  Qcode});
    successMessage("با موفقیت آپدیت شد");
    dispatch(closeArchiveQuestionModal());
    navigate("/dashboard/app/questionnaireList")
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

export const commentQuestion = (Qcode, comment) => async (dispatch) => {
  try {
    await api.commentOnQuestionnaire(Qcode, comment);
    dispatch({ type: "COMMENT_ON_QUESTIONNAIRE",  Qcode});
    successMessage("با موفقیت آپدیت شد");
    dispatch(closeArchiveQuestionModal());
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

export const archiveQuestionEdit =
  (mode, Qcode, status) => async (dispatch) => {
    try {
      await api.waitingQuestionnaire(Qcode, status);
      dispatch({ type: "ARCHIVE_DETAIL_QUESTIONNAIRE_EDIT" });
      successMessage("با موفقیت آپدیت شد");
      dispatch(closeArchiveQuestionModal());
      dispatch(detailQuestionnaire(Qcode));
      // dispatch(allQuestionnaire(1));
      // dispatch(archiveQuestionnaire());
    } catch (error) {
      errorMessage(error.response.data?.data?.message);
    }
  };

// get archive questionnaire -----------------------
export const archiveQuestionnaire = () => async (dispatch) => {
  try {
    const { data } = await api.getAllArchiveQuestionnaire();
    const result = data?.data?.results;
    dispatch({ type: "GET_ALL_ARCHIVE_QUESTIONNAIRE", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// confirm questionnaire
export const confirmQuestion = (Qcode, type) => async (dispatch) => {
  try {
    await api.confirmQuestionnaire(Qcode);
    dispatch({ type: "CONFIRM_QUESTIONNAIRE" });
    successMessage("با موفقیت تایید شد");
    dispatch(allQuestionnaire(1));
    if (type === "mealplan") {
      dispatch(mealPlan(1, "", "", ""));
    }
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// upload meal plan
export const addMealPlan =
  (mealPlanData, navigate, area) => async (dispatch) => {
    try {
      dispatch({ type: "UPLOAD_MEAL_PLAN_LOADING" });
      await api.uploadMealPlan(mealPlanData, area);
      dispatch({ type: "UPLOAD_MEAL_PLAN" });
      successMessage("با موفقیت آپلود شد");
      dispatch(allQuestionnaire(1));
      dispatch(closeMealPlanModal());
      navigate("/dashboard/app/questionnaireList");
    } catch (error) {
      errorMessage(error.response.data?.data?.message);
    }
  };

// get meal plan
export const mealPlan =
  (pageNumber, phoneNumber, fullName, product) => async (dispatch) => {
    try {
      const { data } = await api.getMealPlan(
        pageNumber,
        phoneNumber,
        fullName,
        product
      );
      const result = data?.data?.result;
      dispatch({ type: "GET_ALL_MEALPLAN", payload: result });
    } catch (error) {
      errorMessage(error.response.data?.data?.message);
    }
  };

// get reject meal plan
export const rejectMealPlan = () => async (dispatch) => {
  try {
    const { data } = await api.getRejectMealPlan();
    const result = data?.data?.result;
    dispatch({ type: "GET_ALL_REJECT_MEALPLAN", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// get meal plan detail
export const mealPlanDetail = (mealPlanId) => async (dispatch) => {
  try {
    const { data } = await api.getMealPlanDetail(mealPlanId);
    const result = data?.data?.result;
    dispatch({ type: "GET_MEAL_PLAN_DETAIL", payload: result });
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// reject meal plan
export const rejectedMealPaln = (Qcode, data, navigate) => async (dispatch) => {
  try {
    await api.rejectDescription(Qcode, data);
    dispatch({ type: "REJECT_MEAL_PLAN" });
    dispatch(closeMealPlanModal());
    navigate("/dashboard/app/editquestionnaireList");
    successMessage("برنامه غذایی با موفقیت به مرحله قبل برگردانده شد");
  } catch (error) {
    errorMessage(error.response.data?.data?.message);
  }
};

// reject meal plan
export const rejectedMealPalnSale =
  (Qcode, data, navigate) => async (dispatch) => {
    try {
      await api.rejectDescriptionSale(Qcode, data);
      dispatch({ type: "REJECT_MEAL_PLAN" });
      dispatch(closeMealPlanModal());
      navigate("/dashboard/app/editquestionnaireList");
      successMessage("برنامه غذایی با موفقیت به مرحله قبل برگردانده شد");
    } catch (error) {
      errorMessage(error.response.data?.data?.message);
    }
  };

export const AddQuestionForm = (formData) => (dispatch) => {
  dispatch({ type: "QUESTIONS_FORM_UPDATE", payload: formData });
  successMessage("با موفقیت ثبت شد");
};

export const updateQuestions =
  (questionData, Qcode, navigate) => async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_QUESTIONNAIRE_LOADING" });
      await api.updateQuestionnaire(questionData, Qcode);
      dispatch({ type: "UPDATE_QUESTIONNAIRE" });
      dispatch(confirmQuestion(Qcode));
      successMessage("پرسشنامه با موفقیت آپدیت شد");
      navigate("/dashboard/app/questionnaireList");
    } catch (error) {
      successMessage("برنامه غذایی با موفقیت به مرحله قبل برگردانده شد");
    }
  };
