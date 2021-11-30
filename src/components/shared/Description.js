import React from "react";

const Description = ({ description, classList }) => {
  return (
    <p className={`mb-11 leading-10 opacity-75 mix-blend-normal ${classList}`}>{description}</p>
  );
};

export default Description;
