import { API } from "./apiRequestInterface";

export const getExpertEducation = (page, searchTerm) =>
  API.get(`/expert/all?page=${page}&limit=50&search=${searchTerm}`);

export const getDetailExpert = (uid) => API.get(`expert?uid=${uid}`);
