import { Container } from "@mui/material";
import React from "react";
import ProdList from "../components/Products/ProdList/ProdList";
import { useProductContext } from "../contexts/ProductContextProvider";
import Spinner from "../components/Spinner/Spinner";
import OneProduct from "../components/Products/OneProduct";

const Products = () => {
  const { getProducts, products } = useProductContext();
  return (
    <div>
      <h2>Products</h2>
      <ProdList />
    </div>
  );
};

export default Products;
