import { Container } from "@mui/material";
import React from "react";
import ProdList from "../components/Products/ProdList/ProdList";

const Products = () => {
  return (
    <Container maxWidth="lg">
      <h1>Products page</h1>
      <ProdList />
    </Container>
  );
};

export default Products;
