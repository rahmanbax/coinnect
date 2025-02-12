import React from "react";

const Modal = ({ open, onClose, children, searchModal = false }) => {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center ${
        open ? "visible bg-black/40 backdrop-blur-xs" : "invisible"
      }
      
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          searchModal
            ? "absolute top-5 md:top-10 lg:top-20 w-full md:w-[656px]"
            : "relative"
        } `}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
