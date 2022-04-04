import { IconButton } from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import { useProductContext } from "../../../contexts/ProductContextProvider";
const Edit = () => {
  const navigate = useNavigate();
  const { forEditVal, getOneProduct, saveEditedProd } = useProductContext();
  return (
    <div>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIosNewIcon fontSize="large" />
      </IconButton>
      <h2>Edit</h2>
      <Form
        saveValues={saveEditedProd}
        compForEdit={true}
        forEditVal={forEditVal}
        getOneProduct={getOneProduct}
      />
    </div>
  );
};

export default Edit;
