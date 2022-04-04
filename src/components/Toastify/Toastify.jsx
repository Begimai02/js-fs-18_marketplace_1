import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (type, message) => {
  toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type: type,
    theme: "colored",
  });
};

export const notifyError = (err) => {
  if (err && err?.response) {
    notify("error", `${err?.response.status} ${err?.response.statusText}`);
  } else {
    notify("error", "Произошла ошибка!");
  }
};

const Toastify = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default Toastify;
