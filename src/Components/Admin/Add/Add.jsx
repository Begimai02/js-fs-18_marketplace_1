import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import { useProductContext } from "../../../Context/ProductContextProvider";

const Add = () => {
  const navigate = useNavigate();
  const { addProduct } = useProductContext();
  return (
    <div>
      <IconButton
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowBackIosNewIcon fontSize="large" />
      </IconButton>
      <h2> Admin add </h2>
      <Form saveValues={addProduct} compForEdit={false} />
    </div>
  );
};

export default Add;
