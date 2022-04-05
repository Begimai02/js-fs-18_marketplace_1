import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";

const initValues = {
  title: "",
  type: "",
  price: "",
  description: "",
  img: "",
};

const Form = ({ saveValues, compForEdit, forEditVal, getOneProduct }) => {
  const [inpValues, setInpValues] = useState(initValues);
  const { id } = useParams();

  // todo EDIT
  useEffect(() => {
    if (compForEdit) {
      getOneProduct(id);
    }
  }, []);

  useEffect(() => {
    if (compForEdit && forEditVal) {
      setInpValues(forEditVal);
    }
  }, [forEditVal]);

  // todo end of EDIT

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveValues(inpValues);
  };

  return (
    <div>
      <h2>Admin form</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
      >
        <TextField
          onChange={(e) => handleChange(e)}
          name="title"
          value={inpValues.title}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="type"
            value={inpValues.type}
            label="Age"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          onChange={(e) => handleChange(e)}
          name="price"
          value={inpValues.price}
          id="outlined-basic"
          label="Price"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          name="img"
          value={inpValues.img}
          id="outlined-basic"
          label="Image"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          name="description"
          value={inpValues.description}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          multiline
          rows={3}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
