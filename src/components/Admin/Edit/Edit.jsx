import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import { useProductContext } from "../../../contexts/ProductContextProvider";

const Edit = () => {
  const navigate = useNavigate();
  const { forEditVal, getOneProduct, saveEditedProd } = useProductContext();
  return (
    <div>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>
      <h2>Edit Admin page</h2>
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
