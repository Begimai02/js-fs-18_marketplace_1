import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useProductContext } from "../../../contexts/ProductContextProvider";
import Spinner from "../../Spinner/Spinner";
import OneProduct from "../OneProduct";

const ProdList = () => {
  const { getProducts, products } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2>Prod list</h2>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        {products && products.length > 0 ? (
          products.map((item) => <OneProduct key={item.id} item={item} />)
        ) : (
          <Spinner />
        )}
      </Grid>
    </div>
  );
};

export default ProdList;
