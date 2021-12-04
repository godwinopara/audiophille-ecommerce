import { useReducer } from "react";
import AudioPhileContext from "./audioPhileContext";
import reducer from "./audioPhilleReducer";
import Data from "../../data";
import { GET_PRODUCT, SET_LOADING } from "../types";

const AudiophilleState = ({ children }) => {
  const initialState = {
    products: [],
    product: {},
    isLoading: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProduct = (slug) => {
    setLoading();
    const data = Data.filter((prod) => {
      return prod.slug === slug;
    });

    dispatch({
      type: GET_PRODUCT,
      payload: data[0],
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  return (
    <AudioPhileContext.Provider
      value={{
        products: state.products,
        getProduct,
        product: state.product,
        isLoading: state.isLoading,
      }}
    >
      {children}
    </AudioPhileContext.Provider>
  );
};

export default AudiophilleState;
