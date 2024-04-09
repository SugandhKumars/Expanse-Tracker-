import React from "react";

const Button = ({ text, color, type, onClick }) => {
  return (
    <div
      type={type}
      onClick={onClick}
      className={`px-2 py-2 flex justify-center   border-[2px] rounded-md border-blue-400 cursor-pointer transition-all ${
        color
          ? "bg-blue-400 text-white hover:bg-white hover:text-blue-400"
          : "hover:bg-blue-400 hover:text-white text-blue-400"
      }`}
    >
      {text}
    </div>
  );
};

export default Button;
