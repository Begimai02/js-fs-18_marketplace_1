import { Container, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContextProvider";
import Spinner from "../components/Spinner/Spinner";

const ProdDetail = () => {
  const { prodId } = useParams();
  const { getOneProduct, forEditVal } = useProductContext();
  useEffect(() => {
    getOneProduct(prodId);
  }, []);
  return (
    <Container>
      <div>
        <Paper>
          <h1>Detail</h1>
          {forEditVal ? (
            <>
              <img width="400px" src={forEditVal.img} alt="" />

              <h3>{forEditVal.title}</h3>
            </>
          ) : (
            <Spinner />
          )}
        </Paper>
      </div>
    </Container>
  );
};

export default ProdDetail;
