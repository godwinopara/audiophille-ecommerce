import { useReducer, useEffect } from "react";
import CartContext from "./cartContext";
import { CART_IS_OPEN, ADD_TO_CART, GET_CART_TOTAL } from "../types";

import reducer from "./cartReducer";

const CartState = ({ children }) => {
  const initialState = {
    cart: [],
    cartIsOpen: false,
    total: "0.00",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    /* GET THE TOTAL AMOUNT OF ITEM IN THE CART WHEN EVER AN ITEM IS ADDED OR REMOVED */
    cartTotal();
    //eslint-disable-next-line
  }, [state.cart]);

  const addToCart = (item) => {
    let itemInCart = false;
    state.cart.forEach((cartItem) => {
      if (cartItem.name === item.name) itemInCart = true;
    });
    if (!itemInCart) {
      dispatch({
        type: ADD_TO_CART,
        payload: item,
      });
    }
  };

  const cartTotal = () => {
    if (state.cart.length > 0) {
      let total = state.cart.reduce((sum, item) => sum + Number(item.amount), 0);
      dispatch({
        type: GET_CART_TOTAL,
        payload: total,
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        cartIsOpen: state.cartIsOpen,
        total: state.total,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
