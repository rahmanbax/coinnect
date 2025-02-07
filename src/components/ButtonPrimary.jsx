import React from "react";

const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-[#FFC31B] hover:bg-[#E5AF18] text-black text-sm font-medium py-2 px-4 transition ease-out"
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
