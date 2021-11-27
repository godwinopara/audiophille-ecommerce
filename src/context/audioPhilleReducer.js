import { GET_PRODUCTS, GET_PRODUCT, SET_LOADING } from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        isLoading: false,
        product: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default reducer;
