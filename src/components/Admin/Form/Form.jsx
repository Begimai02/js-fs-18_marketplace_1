import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

const Form = ({ saveValues, compForEdit, forEditVal, getOneProduct }) => {
  const initValues = {
    title: "",
    type: "",
    price: "",
    description: "",
    img: "",
  };

  const [inpValues, setInpValues] = useState(initValues);
  const { id } = useParams();

  //edit
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

  //end of edit

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
      <h2>Form admin page</h2>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          value={inpValues.title}
          name="title"
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inpValues.type}
            label="Type"
            onChange={(e) => handleChange(e)}
            name="type"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          value={inpValues.price}
          name="price"
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Price"
          variant="outlined"
        />
        <TextField
          value={inpValues.img}
          name="img"
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Img"
          variant="outlined"
        />
        <TextField
          value={inpValues.description}
          name="description"
          onChange={(e) => handleChange(e)}
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
