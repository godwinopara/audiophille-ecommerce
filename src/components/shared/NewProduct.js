import React from "react";

const NewProduct = ({ textStyle = "text-brown-100" }) => {
  return <p className={`${textStyle} tracking-veryWide my-12 xl:mt-0`}>NEW PRODUCT</p>;
};

export default NewProduct;
