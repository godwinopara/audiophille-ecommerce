import React from "react";

const FormInput = ({ inputType, placeholder }) => {
  return (
    <input
      className="border border-gray-100 rounded-lg mb-10 mt-4 pl-10 py-7 w-full"
      type={inputType}
      placeholder={placeholder}
    />
  );
};

export default FormInput;
