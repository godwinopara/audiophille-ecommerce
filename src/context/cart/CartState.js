import { useReducer, useEffect } from "react";
import CartContext from "./cartContext";
import {
  CART_IS_OPEN,
  ADD_TO_CART,
  GET_CART_TOTAL,
  RESET_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "../types";

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

  const toggleDisplayCart = (params) => {
    dispatch({
      type: CART_IS_OPEN,
    });
  };

  const resetCart = () => {
    dispatch({
      type: RESET_CART,
    });
  };

  // FUNCTION THAT CHANGES THE PRODUCT QUANTITY VALUE WHEN THE MINUS OR PLUS BUTTON IS CLICK

  const changeProductQuantity = (productName, quantity) => {
    // CREATE A NEW CART ARRAY AND CHANGE THE QUANTITY VALUE OF THE PRODUCT THAT HAS CHANGED
    const newCartProduct = state.cart.map((item) => {
      if (item.name === productName) {
        item.quantity = quantity;
        return item;
      }
      return item;
    });

    return newCartProduct;
  };

  // DECREASE THE QUANTITY OF A PRODUCT WHEN THE USER CLICKS THE MINUS BUTTON

  const decreaseQuantity = (productName, quantity) => {
    // NEW CART ITEMS AFTER THE QUANTITY VALUE HAS BEEN DECREASED BY 1
    const newCartItems = changeProductQuantity(productName, quantity - 1);

    // WHEN THE MINUS BUTTON IS CLICK TO DECREASE THE NUMBER OF PRODUCT QUANTITY CHECK IF
    // THE QUANTITY IS EQUAL TO ZERO.. IF IT LESS THE 1, REMOVE IT FROM CART

    const filtered = newCartItems.filter((product) => product.quantity > 0);
    dispatch({
      type: DECREASE_QUANTITY,
      payload: filtered,
    });
  };

  // INCREASE THE QUANTITY OF A PRODUCT WHEN THE USER CLICKS THE PLUS BUTTON

  const increaseQuantity = (productName, quantity) => {
    // NEW CART ITEMS AFTER THE QUANTITY VALUE HAS BEEN INCREASED BY 1

    const newCartItems = changeProductQuantity(productName, quantity + 1);
    dispatch({
      type: INCREASE_QUANTITY,
      payload: newCartItems,
    });
  };

  // CALCULATE THE TOTAL SUM OF ALL THE PRODUCT IN THE CART

  const cartTotal = () => {
    if (state.cart.length > 0) {
      let total = state.cart.reduce((sum, item) => sum + Number(item.amount) * item.quantity, 0);
      dispatch({
        type: GET_CART_TOTAL,
        payload: total,
      });
    } else {
      dispatch({
        type: GET_CART_TOTAL,
        payload: "0.00",
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        cartIsOpen: state.cartIsOpen,
        total: state.total,
        quantity: state.quantity,
        addToCart,
        resetCart,
        toggleDisplayCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
