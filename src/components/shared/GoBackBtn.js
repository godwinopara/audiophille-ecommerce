import React from "react";
import { Link } from "react-router-dom";

const GoBackBtn = ({ link }) => {
  return (
    <div className="my-20 bg-opacity-50">
      <Link className="opacity-50 hover:text-brown-100" to={`/${link}`}>
        Go Back
      </Link>
    </div>
  );
};

export default GoBackBtn;
