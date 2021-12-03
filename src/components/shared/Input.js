import React from "react";

const Input = ({ value, classList, onClick }) => {
  return (
    <input
      type="button"
      value={value}
      className={`
        py-6 px-14 text-xl tracking-widest leading-7 inline-block
        ${classList}
        `}
      onClick={onClick}
    />
  );
};

export default Input;
