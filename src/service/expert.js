import { API } from "./apiRequestInterface";
// get experts
export const getExperts = (page = 1, searchTerm, status) =>
  API.get(
    `/experts?mode=1&page=${page}&limit=10&fullName=${
      searchTerm ? searchTerm : ""
    }`
  );

// get experts reject
export const getRejectExperts = (page, searchTerm) =>
  API.get(`/experts?page=${page}&limit=10&mode=3&fullName=${searchTerm}`);

// get archive expert
export const getArchiveexpert = (page, searchTerm) =>
  API.get(`/experts?mode=2&page=$${page}&limit=10&fullName=${searchTerm}`);

// detail request expert
export const getDetailRequestExpert = (phoneNumber) =>
  API.get(`/expert?phoneNumber=${phoneNumber}`);
// reject request expert
export const rejectRequestExpert = (phoneNumber) =>
  API.get(`/expert/reject?phoneNumber=${phoneNumber}`);
// confirm request expert
export const confirmRequestExpert = (phoneNumber) =>
  API.get(`/expert/confirm?phoneNumber=${phoneNumber}`);
// add to archive
export const addToArchive = (phoneNumber, archiveDescription) =>
  API.put(
    `/expert/archive?mode=1&phoneNumber=${phoneNumber}`,
    archiveDescription
  );

export const exitFromArchive = (phoneNumber, archiveDescription) =>
  API.put(
    `/expert/archive?mode=2&phoneNumber=${phoneNumber}`,
    archiveDescription
  );

export const updateExpert = (phoneNumber, data) =>
  API.put(`/expert?phoneNumber=${phoneNumber}`, data);

export const searchExpert = (query) => API.get(`/expert/search?q=${query}`);
