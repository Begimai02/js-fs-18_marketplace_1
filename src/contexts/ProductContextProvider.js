import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { notify, notifyError } from "../components/Toastify/Toastify";
import { ACTIONS, API } from "../helpers/consts";

export const productContext = createContext();

export const useProductContext = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  forEditVal: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      let { data } = await axios.get(API);
      dispatch({
        type: ACTIONS.GET_PRODUCTS,
        payload: data,
      });
    } catch (err) {
      if (err.response) {
        notifyError(err.response.status, err.response.statusText);
      } else {
        notify("error", "Произошла ошибка!");
      }
    }
  };

  const addProduct = async (newProduct) => {
    try {
      let res = await axios.post(API, newProduct);
      notify("success", `Продукт ${newProduct.title} был успешно добавлен!`);
      navigate("/admin");
    } catch (err) {
      console.log(err.response);
      if (err.response) {
        notifyError(err.response.status, err.response.statusText);
      } else {
        notify("error", "Произошла ошибка!");
      }
    }
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        addProduct,
        getProducts,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
