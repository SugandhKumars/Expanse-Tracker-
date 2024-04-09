import React from "react";

const Input = ({ label, type, placeholder, state, setState }) => {
  return (
    <div>
      <p className="py-1 text-lg">{label}</p>
      <input
        type={type}
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
        placeholder={placeholder}
        className="border-b-[1px] border-black w-full pb-2 mb-3 outline-none"
      />
    </div>
  );
};

export default Input;
