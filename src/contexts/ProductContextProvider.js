import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { API } from "../helpers/consts";
import axios from "axios";

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
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProduct = async (newProduct) => {
    try {
      let res = await axios.post(API, newProduct);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <productContext.Provider value={{ addProduct }}>
        {children}
      </productContext.Provider>
    </div>
  );
};

export default ProductContextProvider;
