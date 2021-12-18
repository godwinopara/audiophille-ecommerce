import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import CartItemDetails from "../cart/CartItemDetails";
import CartContext from "../../context/cart/cartContext";

const OrderSucessMessage = () => {
  const [showOtherItem, setShowOtherItem] = useState(false);
  const { cart, total } = useContext(CartContext);

  const handleOnClick = (params) => {
    setShowOtherItem(!showOtherItem);
  };

  return (
    <section className="w-full grid place-items-center">
      {/* OVERLAY */}
      <div className="fixed top-0 h-full w-full bg-black-300 opacity-50 "></div>
      {/* OVERLAY END */}

      {/* SUCCESS MESSAGE CONTENT */}
      <div className="px-7 py-14 sm:px-14 fixed  top-40 w-6/6  max-w-4xl bg-white-300 rounded-xl z-20">
        <div className="h-24 w-24 bg-brown-100 grid place-items-center rounded-full mb-9">
          <span className="text-5xl text-white-300">&#10004;</span>
        </div>

        <h2 className="uppercase text-3xxl font-bold mb-6">
          Thank you
          <br />
          for your order
        </h2>
        <p className="opacity-50">you will receive an email notification shortly</p>

        <div>
          <div className="my-10  rounded-xl overflow-hidden md:grid md:grid-cols-2">
            <div className="h-full bg-white-100 px-10 py-5">
              <div className="flex justify-between items-center mb-6">
                <CartItemDetails
                  productCartImg={cart[0].image}
                  productAmount={cart[0].amount}
                  productName={cart[0].name}
                />
                <p className="opacity-50 font-bold">X{cart[0].quantity}</p>
              </div>

              {/* OTHER ITEMS THE USER ORDERED */}
              {showOtherItem &&
                cart.map((item, id) => {
                  if (id !== 0) {
                    return (
                      <div className="flex justify-between items-center mb-6">
                        <CartItemDetails
                          productCartImg={item.image}
                          productAmount={item.amount}
                          productName={item.name}
                        />
                        <p className="opacity-50 font-bold">X{item.quantity}</p>
                      </div>
                    );
                  }
                  return null;
                })}

              {/* UNDERLINE */}
              <div className="h-h bg-black-200 my-5 opacity-10 "></div>

              {/* SHOW ALL ITEMS THE USER ORDERED WHEN THE USER CLICK THE BUTTON*/}
              {cart.length > 1 && (
                <button
                  onClick={handleOnClick}
                  className="opacity-50 font-bold text-xl text-center w-full"
                >
                  {showOtherItem ? "view less" : `and ${cart.length - 1} other item(s)`}
                </button>
              )}
              {/* ************************ */}
            </div>
            <div className="bg-black-200 text-white-300 h-36 flex flex-col justify-center pl-10 md:h-full">
              <p className="opacity-50 mb-3">GRAND TOTAL</p>
              <p className="font-bold text-2xxl">${total}</p>
            </div>
          </div>
        </div>

        <button className="w-full h-20 text-center bg-brown-100">
          <Link className="font-bold uppercase text-xl tracking-widest text-white-300 " to="/">
            Back to Home
          </Link>
        </button>
      </div>
    </section>
  );
};

export default OrderSucessMessage;
