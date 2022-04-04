import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import { useProductContext } from "../../../contexts/ProductContextProvider";

const Add = () => {
  const navigate = useNavigate();
  const { addProducts } = useProductContext();
  return (
    <div>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>
      <h1>Add Admin Page</h1>
      <Form saveValues={addProducts} compForEdit={false} />
    </div>
  );
};

export default Add;
