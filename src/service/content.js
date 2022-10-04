import { API } from "./apiRequestInterface";

// get content
export const getAllContent = () => API.get("/expert/sills");

// get single content
export const singleContent = (sid) => API.get(`/expert/sills?sid=${sid}`);

// get info expert
export const getInfoExpert = (expertCode) =>
  API.get(`/expert?expertCode=${expertCode}`);

// confirm content
export const confirmedContent = (sid) => API.put(`/expert/skills?sid=${sid}`);

// delete content
export const deleteContent = (sid) => API.delete(`/expert/skills?sid=${sid}`);

// get all carriers
export const getAllCarriere = () => API.get("/expert/carriers");

// get single carrier
export const getCarrier = (sid) => API.get(`expert/carriers?sid=${sid}`);

// confirm content

export const confirmCarrier = (sid) =>
  API.put(`expert/carrier/confirm?sid=${sid}`);

export const rejectCarrier = (sid) =>
  API.put(`/expert/carrier/reject?sid=${sid}`);

export const getFileContent = () => API.get("/expert/files");

export const singleFileContent = (id) => API.get(`/expert/file?id=${id}`);

export const getVideoContent = () => API.get("/expert/videos");

export const getSingleVideoContent = (id) => API.get(`/expert/video?id=${id}`);

export const archiveContent = (id) => API.put(`/expert/archive?id=${id}`);
