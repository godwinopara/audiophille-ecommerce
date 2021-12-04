import React from "react";

const ButtonCart = ({ buttonText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-white-100  inline-block cursor-pointer text-white-400 hover:text-brown-100"
    >
      {buttonText}
    </button>
  );
};

export default ButtonCart;
