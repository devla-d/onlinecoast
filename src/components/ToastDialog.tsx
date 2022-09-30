import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

const ToastDialog = () => {
  const dialog = document.getElementById("dialog-wrapper") as HTMLDivElement;
  return ReactDOM.createPortal(
    <>
      <ToastContainer />
    </>,
    dialog
  );
};

export default ToastDialog;
