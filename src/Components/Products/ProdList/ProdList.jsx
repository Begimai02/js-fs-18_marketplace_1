import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useProductContext } from "../../../Context/ProductContextProvider";
import Spiner from "../../Spiner/Spiner";
import OneProduct from "../OneProduct/OneProduct";

const ProdList = () => {
  const { getProducts, products } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h2>Prod List</h2>
      <Grid container spacing={2}>
        {products && products.length > 0 ? (
          products.map((item) => <OneProduct key={item.id} item={item} />)
        ) : (
          <Spiner />
        )}
      </Grid>
    </div>
  );
};

export default ProdList;
