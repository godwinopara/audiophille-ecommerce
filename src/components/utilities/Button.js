import React from "react";
import PropTypes from "prop-types";

const Button = ({ classList }) => {
  return <button className={`px-12 py-6 text-2xl font-bold ${classList}`}>SEE PRODUCT</button>;
};

export default Button;

Button.propTypes = {
  classList: PropTypes.string,
};
