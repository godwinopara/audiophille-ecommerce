import { useContext, Fragment } from "react";
import CartContext from "../../context/cart/cartContext";
import CartList from "../cart/CartList";
import Input from "../shared/Input";
import Heading3 from "../shared/Heading3";
import { Link } from "react-router-dom";

const Cart = () => {
  let { cart, total, resetCart, toggleDisplayCart } = useContext(CartContext);

  const handleClick = (e) => {
    e.preventDefault();
    resetCart();
  };

  const handleOnLinkClick = () => {
    toggleDisplayCart();
  };

  return (
    <Fragment>
      <div className="absolute min-h-screen opacity-50 bg-white-500 w-full top-full left-0"></div>
      <div
        className="relative max-w-screen-xxl mx-auto bg-black-500 top-7
    "
      >
        <div className="bg-white-300 z-20 py-12 shadow-md px-10 rounded-xl absolute w-full md:w-1/2 md:right-0 xl:right-0 xl:w-1/3">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-bold uppercase text-3xl">Cart ({cart.length})</h2>

            {/* CLEAR THE ITEM ON THE CART */}
            <Input
              classList="bg-white-300 opacity-50 underline text-2xl cursor-pointer hover:text-brown-100 sm:px-0"
              value="Remove All"
              name="clear-cart"
              onClick={handleClick}
            />
          </div>
          {cart.length === 0 && (
            <Heading3 text="Your cart is empty" classList="text-center py-12" />
          )}

          {cart.length > 0 &&
            cart.map((item, id) => {
              return (
                <CartList
                  key={id}
                  productCartImg={item.image}
                  productAmount={item.amount}
                  productName={item.name}
                  quantity={item.quantity}
                />
              );
            })}

          <ul className="flex justify-between items-center my-10">
            <li className="opacity-50">TOTAL</li>
            <li className="font-bold text-2xxl">$ {total}</li>
          </ul>
          {/* <Link
            className="py-6 px-14 w-full text-white-300 cursor-pointer tracking-widest leading-7 block text-center bg-brown-100"
            to="/checkout"
          >
            CHECKOUT
          </Link> */}
          <Link to="/checkout" onClick={handleOnLinkClick}>
            <Input classList="bg-brown-100 w-full text-white-300 cursor-pointer" value="CHECKOUT" />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
