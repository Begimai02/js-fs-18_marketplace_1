import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../../../contexts/ProductContextProvider";
import { PRODUCTS_LIMIT } from "../../../helpers/consts";
import Spinner from "../../Spinner/Spinner";
import OneProduct from "../OneProduct/OneProduct";
import Pagination from "@mui/material/Pagination";

const ProdList = () => {
  const { getProducts, products, pageTotalCount } = useProductContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(+searchParams.get("_page") || 1);

  // Чтобы в самом начале рождения компонента установить query params == параметры запроса, и именно по ним делать запрос getProducts()
  useEffect(() => {
    setSearchParams({
      _limit: PRODUCTS_LIMIT,
      _page: page,
    });
  }, []);

  // отрабатывает каждый раз, как меняется query params == параметры запроса
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      _limit: PRODUCTS_LIMIT,
      _page: page,
    });
  }, [page]);

  return (
    <div>
      <h2>Prod list</h2>
      <Grid container spacing={2}>
        {products && products.length > 0 ? (
          products.map((item) => <OneProduct key={item.id} item={item} />)
        ) : (
          <Spinner />
        )}
      </Grid>
      <div style={{ margin: "50px 0", textAlign: "center" }}>
        <Pagination
          count={pageTotalCount}
          color="secondary"
          sx={{ display: "inline-block" }}
          onChange={(event, pageVal) => setPage(pageVal)}
          page={page}
        />
      </div>
    </div>
  );
};

export default ProdList;
