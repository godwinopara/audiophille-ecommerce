import React from "react";

const CartItemDetails = ({ productCartImg, productName, productAmount }) => {
  return (
    <div className="flex items-center">
      <img
        src={productCartImg}
        alt={productCartImg}
        className="h-16 w-16  rounded-xl mr-4 sm:mr-6 sm:h-24 sm:w-24"
      />
      <div className="mr-2">
        <p className="font-bold text-lg sm:text-2xl">{productName}</p>
        <span className="font-bold text-lg sm:text-2xl opacity-50">$ {productAmount}</span>
      </div>
    </div>
  );
};

export default CartItemDetails;
