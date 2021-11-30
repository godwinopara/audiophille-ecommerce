import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ classList, path }) => {
  return (
    <Link
      className={`px-12 py-6 inline-block text-2xl font-bold tracking-widest ${classList}`}
      to={`/product/${path}`}
    >
      SEE PRODUCT
    </Link>
  );
};

export default Button;

Button.propTypes = {
  classList: PropTypes.string,
};
