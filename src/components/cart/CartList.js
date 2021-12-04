import { useContext } from "react";
import CartContext from "../../context/cart/cartContext";
import ButtonCart from "./ButtonCart";

const CartList = ({ productCartImg, productName, productAmount, quantity }) => {
  const { decreaseQuantity, increaseQuantity } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between bg-white-300 mb-10 ">
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
      <div className="flex items-center  bg-white-300">
        <ButtonCart onClick={() => decreaseQuantity(productName, quantity)} buttonText="-" />
        <span className="px-4 py-2 font-bold bg-white-100  inline-block">{quantity}</span>
        <ButtonCart onClick={() => increaseQuantity(productName, quantity)} buttonText="+" />
      </div>
    </div>
  );
};

export default CartList;
