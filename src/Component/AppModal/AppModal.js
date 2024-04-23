import React from "react";
import "./AppModal.css";
import { IoClose } from "react-icons/io5";

const AppModal = ({ width = 30, open = false, children, onClose }) => {
  if (!open) return null;
  return (
    <div className="g_app_modal_box ">
      <div
        style={{ width: `${width}%` }}
        className="g_modal_content_box bg-white rounded-2"
      >
        {children}
        <div onClick={onClose} className="g_close_btn ">
          <IoClose />
        </div>
      </div>
    </div>
  );
};

export default AppModal;
