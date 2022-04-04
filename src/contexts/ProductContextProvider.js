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
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, forEditVal: action.payload };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  //RENDER
  const getProducts = async () => {
    try {
      let { data } = await axios.get(API);
      dispatch({
        type: ACTIONS.GET_PRODUCTS,
        payload: data,
      });
    } catch (err) {
      if (err.response) {
        notifyError(err.response, err.response.status, err.response.statusText);
      } else {
        notify("error", "Something went wrong");
      }
    }
  };
  //CREATE
  const addProducts = async (newProduct) => {
    try {
      let res = await axios.post(API, newProduct);
      notify("success", `Product ${newProduct.title} successfully posted!`);
      navigate("/admin");
    } catch (err) {
      console.log(err);
      notify(err);
    }
  };
  //DELETE
  const deleteProduct = async (prod) => {
    try {
      let res = await axios.delete(`${API}/${prod.id}`);
      notify("success", `Product ${prod.title} successfully deleted!`);
      getProducts();
    } catch (err) {
      notify(err);
    }
  };
  //EDIT
  const getOneProduct = async (id) => {
    try {
      let { data } = await axios.get(`${API}/${id}`);
      dispatch({
        type: ACTIONS.GET_ONE_PRODUCT,
        payload: data,
      });
    } catch (err) {
      notify(err);
    }
  };

  const saveEditedProd = async (editedProd) => {
    try {
      let res = await axios.patch(`${API}/${editedProd.id}`, editedProd);
      notify("info", `Product ${editedProd.title} successfully updated.`);
      getProducts();
      navigate("/admin");
    } catch (err) {
      notify(err);
    }
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        forEditVal: state.forEditVal,
        getOneProduct,
        getProducts,
        addProducts,
        deleteProduct,
        saveEditedProd,
      }}
    >
      {children}{" "}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
