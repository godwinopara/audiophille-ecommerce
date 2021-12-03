import { CART_IS_OPEN, ADD_TO_CART, GET_CART_TOTAL } from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case CART_IS_OPEN:
      return {
        ...state,
        cartIsOpen: !state.cartIsOpen,
      };
    case GET_CART_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
