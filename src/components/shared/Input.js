import React from "react";

const Input = ({ value, classList }) => {
  return (
    <input
      type="button"
      value={value}
      className={`
        py-6 px-14 font-bold text-xl tracking-widest leading-7
        ${classList}
        `}
    />
  );
};

export default Input;
