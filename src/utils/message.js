import { toast } from "react-toastify";

export const successMessage = (message) => {
  toast.success(message, {
    position: "bottom-left",
    closeOnClick: true,
  });
};

export const errorMessage = (message) => {
  toast.error(message, {
    position: "bottom-left",
    closeOnClick: true,
  });
};
