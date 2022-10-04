export const userData = () =>
  localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;
