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
  const getProducts = async () => {
    try {
      let { data } = await axios.get(API);
      dispatch({
        type: ACTIONS.GET_PRODUCTS,
        payload: data,
      });
    } catch (err) {
      notifyError(err);
    }
  };

  const addProduct = async (newProduct) => {
    try {
      let res = await axios.post(API, newProduct);
      notify("success", `Продукт ${newProduct.title} был успешно добавлен!`);
      navigate("/admin");
    } catch (err) {
      notifyError(err);
    }
  };

  const deleteProduct = async (prod) => {
    try {
      let res = await axios.delete(`${API}/${prod.id}`);
      notify("seccess", `Продукт ${prod.title}был удален!`);
      getProducts();
    } catch (err) {
      notifyError(err);
    }
  };

  const getOneProduct = async (id) => {
    try {
      let { data } = await axios(`${API}/${id}`);
      dispatch({
        type: ACTIONS.GET_ONE_PRODUCT,
        payload: data,
      });
    } catch (err) {
      notifyError(err);
    }
  };

  const saveEditedProd = async (editedProd) => {
    try {
      let res = await axios.patch(`${API}/${editedProd.id}`, editedProd);
      notify("info", `Продук ${editedProd.title} был успешно обновлен`);
      getProducts();
      navigate("/admin");
    } catch (err) {
      notifyError(err);
    }
  };
  return (
    <productContext.Provider
      value={{
        products: state.products,
        forEditVal: state.forEditVal,
        addProduct,
        getProducts,
        deleteProduct,
        getOneProduct,
        saveEditedProd,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
