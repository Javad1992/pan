import { API } from "./apiRequestInterface";

export const getAllEmployee = () => API.get("/employee");

export const addEmployee = (formData) => API.post("/employee", formData);
