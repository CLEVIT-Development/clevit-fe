"use client";

import { ToastContainer } from "react-toastify";

const ToastProvider = () => (
  <ToastContainer
    className="toast-container"
    draggable
    rtl={false}
    theme="light"
    pauseOnHover
    closeOnClick
    autoClose={3000}
    pauseOnFocusLoss
    newestOnTop={false}
    position="top-right"
    hideProgressBar={false}
  />
);

export default ToastProvider;
