// axios a module for server working
import axios from "axios";

// get user information
import { userData } from "../help/userData";
import { errorMessage } from "../utils/message";

// create base url
const API = axios.create({ baseURL: "https://agrodayan.ir/api" });

// set access token for every request
API.interceptors.request.use(
  (config) => {
    // get information user
    const userInformation = userData()?.data;
    const { accessToken } = userInformation?.result;
    if (accessToken) {
      config.headers.common["access-token"] = accessToken;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(() => {
      errorMessage("some thing wrong", error);
    });
  }
);

// set token and refresh token fro logout
const logout = () => {
  const userInformation = userData()?.data;
  const { accessToken, refreshToken } = userInformation?.result;
  axios.defaults.headers.common["access-token"] = accessToken;
  axios.defaults.headers.common["refresh-token"] = refreshToken;
};

export { API, logout };
