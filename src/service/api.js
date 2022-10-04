// axios module for working with server
import axios from "axios";
// craete base url for other requests
import { API } from "./apiRequestInterface";
// get the user information
import { userData } from "../help/userData";
// sign in
export const singIn = (userData) =>
  axios.put("https://agrodayan.ir/api/employee/login", userData);
// logout
export const logOut = () =>
  axios.get("https://agrodayan.ir/api/employee/logout", {
    headers: {
      "access-token": userData()?.data?.result?.accessToken,
      "refresh-token": userData()?.data?.result?.refreshToken,
    },
  });

//----------------------------VISIT REQUEST-------------------------
// get all visit request
export const getAllVisitRequest = () => API.get("/visit/requests");

// get single visit request
export const getSingleVisitRequest = (parentId) =>
  API.get(`/visit/request?parentId=${parentId}`);
// update visit request
export const updateVistiRequests = (parantId, visitData) =>
  API.put(`/visit/requests?parentId=${parantId}`, visitData);
// update visit request
export const updateVisitRequest = (visitData) =>
  API.put("/visit/request", visitData);
// delete visit request
export const deleteVisitRequest = (visitCode) =>
  API.delete(`/visit/request?visitCode=${visitCode}`);
// confirm cost visit request
export const confirmCostApi = (visitCode) =>
  API.get(`/visit/cost?visitCode=${visitCode}&mode=1`);
// send sms question
export const sendingSms = (visitCode) =>
  API.get(`/visit/sms?visitCode=${visitCode}`);
// confirm visit request
export const confirmVisit = (visitCode) =>
  API.get(`/visit/confirm?visitCode=${visitCode}`);
// reject a visit request
export const rejectVisitRequest = (visitCode) =>
  API.get(`/visit/reject?visitCode=${visitCode}`);
// -----------------------------GET PROVINCE AND CITIED------------------------------
// get province
export const getProvince = () => API.get("/provinces");
// get cities
export const getCities = () => API.get("/cities");
// get products
export const getProducts = () => API.get("/products");
// ----------------------------SERVICE DASHBOARD---------------------------------
// get all static avatars
export const getStaticAvatar = () => API.get("/staticAvatar");
// upload image
export const uploadImage = (imageData) => API.put("/uploadAvatar", imageData);
// ------------------------------FARMER SERVICE----------------------------------------------------------------
// register farmer
export const regiserFarmer = (farmerData) =>
  API.post("/farmer/register", farmerData);
// ----------------------------CHECKLIST SERVICE-------------------------------------
// get all checkList
export const getAllChecklist = () => API.get("/visit/checkList");
// get detail checklist
export const getDetailChecklist = (visitId) =>
  API.get(`/visit/checkList?visitId=${visitId}`);
// add to archive checklist
export const addArchiveChecklist = (data) => API.put("/visit/archive", data);
// get all archive checklist
export const getAllArchiveChecklist = () => API.get("/visit/archive");
// ---------------------------FACTOR SERVICE-----------------------------------------
// add factor
export const addFactor = (factorData) => API.post("/factor", factorData);

// update factor
export const updateFactor = (visitCode) =>
  API.put(`/factor?visitCode=${visitCode}`);
// ---------------------------Expert Certain------------------------------------
// search expert
export const searchExpert = (expertKey, expertValue) =>
  API.get(`/expert?${expertKey}=${expertValue}`);
// edit expert
export const editExpertData = (editedData, phoneNumber) =>
  editedData instanceof FormData
    ? API.put(`expert/files?uid=${phoneNumber}`, editedData)
    : API.put(`expert?phoneNumber=${phoneNumber}`, editedData);
// certain expert
export const expert = (expertData) => API.put("/visit/request", expertData);
// ------------------------Gis Service----------------------------
// add gis files
export const addGisFile = (formData) =>
  API.post("/visit/data/upload", formData);

// get all gis filess
export const getAllGisFiles = () => API.get("/visit/data");

// ---------------------analyst service-------------------
// upload visit report service
export const addVisitReport = (formData) =>
  API.post("/visit/report/upload", formData);

//------------------------Education Manager -----------------------
// get visit report files
export const getAllVisitReports = () => API.get("/visit/report");

// ----------------------Questionnaire Service -------------------------
// get all questionnaire
export const getAllQuestionnaire = (
  pageNumber,
  fullName,
  phoneNumber,
  product
) =>
  API.get(
    `/questionnaires?page=${pageNumber ? pageNumber : ""}&limit=10${
          fullName && `&fullName=${fullName}`
    }
    ${
        phoneNumber && `&phoneNumber=${phoneNumber}`
    }
    ${
        product && `&product=${product}`
    }`
  );

// get detail questionnaire
export const getDetailQuestionnaire = (Qcode) =>
  API.get(`/questionnaire?Qcode=${Qcode}`);

// waiting a questionnaire
export const waitingQuestionnaire = (Qcode, flag) =>
  API.put(`/questionnaires?Qcode=${Qcode}`, flag);

// archive a questionnaire
export const archiveQuestionnaire = (mode, Qcode, comment) => API.put(`/questionnaire/record/archive?mode=${mode}&Qcode=${Qcode}`, comment);

// comment a questionnaire
export const commentOnQuestionnaire = (Qcode , comment) => API.put(`/questionnaire/record/comment?Qcode=${Qcode}` , comment)

// get archive questionnaire
export const getAllArchiveQuestionnaire = () =>
  API.get("/questionnaires/archive");
// confirm questionnaire
export const confirmQuestionnaire = (Qcode) =>
  API.get(`/questionnaires/confirm?Qcode=${Qcode}`);
// update questionnaire
export const updateQuestionnaire = (questionData, Qcode) =>
  API.put(`/questionnaires?Qcode=${Qcode}`, questionData);

// ----------------------Meal Plan Writer--------------------------
// upload meal plan
export const uploadMealPlan = (mealPlanData, area) =>
  API.post(`/mealPLan/upload?area=${area}`, mealPlanData);

// get meal plan
export const getMealPlanDetail = (mealPlanId) => API.get(`/mealPlan?mealPlanId=${mealPlanId}`);
// get meal plan
export const getMealPlan = (pageNumber, phoneNumber, fullName, product) =>
  API.get(
    `/mealPlans?mode=1&pageNumber=${pageNumber}&phoneNumber=${phoneNumber}&fullName=${fullName}&product=${product}`
  );
// get reject meal plan
export const getRejectMealPlan = () => API.get(`/mealPlans?mode=rejected`);
// reject description
export const  rejectDescription = (Qcode, data) =>
    API.put(`/questionnaire/reject/education?Qcode=${Qcode}`, data);
export const rejectDescriptionSale = (Qcode, data) =>
  API.put(`/questionnaire/reject/sale?Qcode=${Qcode}`, data);
