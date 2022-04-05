import { IconButton } from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import { useProductContext } from "../../../contexts/ProductContextProvider";

const Add = () => {
  const navigate = useNavigate();
  const { addProduct } = useProductContext();
  return (
    <div>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIosNewIcon fontSize="large" />
      </IconButton>
      <h2>Add</h2>
      <Form saveValues={addProduct} compForEdit={false} />
    </div>
  );
};

export default Add;
