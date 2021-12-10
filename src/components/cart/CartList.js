import { useContext } from "react";
import CartContext from "../../context/cart/cartContext";
import ButtonCart from "./ButtonCart";
import CartItemDetails from "./CartItemDetails";

const CartList = ({ productCartImg, productName, productAmount, quantity }) => {
  const { decreaseQuantity, increaseQuantity } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between bg-white-300 mb-10 ">
      <CartItemDetails
        productCartImg={productCartImg}
        productName={productName}
        productAmount={productAmount}
      />
      <div className="flex items-center  bg-white-300">
        <ButtonCart onClick={() => decreaseQuantity(productName, quantity)} buttonText="-" />
        <span className="px-4 py-2 font-bold bg-white-100  inline-block">{quantity}</span>
        <ButtonCart onClick={() => increaseQuantity(productName, quantity)} buttonText="+" />
      </div>
    </div>
  );
};

export default CartList;
