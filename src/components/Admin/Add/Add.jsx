import { IconButton } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
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
      <h2>Add</h2>
      <Form saveValues={addProducts} compForEdit={false} />
    </div>
  );
};

export default Add;
