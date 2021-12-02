import React from "react";
import CartImg from "../../assets/cart/image-xx59-headphones.jpg";
import CartList from "../cart/CartList";
const Cart = () => {
  return (
    <div className="relative max-w-screen-xxl mx-auto">
      <div className="bg-white-300 py-12 px-10 rounded-xl absolute w-full md:w-1/2 md:right-0 xl:right-0">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-bold uppercase text-3xl">Cart (3)</h2>
          <input
            type="button"
            value="Remove All"
            className="bg-white-300 opacity-50 underline hover:text-brown-100"
          />
        </div>
        <CartList productCartImg={CartImg} productAmount="500" productName="XX99 MARK II" />
        <CartList productCartImg={CartImg} productAmount="2999" productName="XX99 MARK I" />
      </div>
    </div>
  );
};

export default Cart;
