import { Container } from "@mui/material";
import React from "react";
import ProdList from "../Components/Products/ProdList/ProdList";

const Products = () => {
  return (
    <Container maxWidth="lg">
      <h1>Products</h1>
      <ProdList />
    </Container>
  );
};

export default Products;
