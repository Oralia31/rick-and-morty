import React, { useState, useContext } from "react";
import { MainContainer } from "./Styles";
import { useNavigate } from "react-router-dom";
import {
  FormControlLabel,
  FormControl,
  FormGroup,
  Checkbox,
} from "@mui/material";

const CheckboxGroup = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name } = event.target;
    setSelected(name);
    navigate(`/rick-and-morty/filter/${name}`);
  };

  return (
    <MainContainer>
      <h2>Filters: </h2>
      <FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={selected === "female"}
                onChange={handleChange}
                name="female"
              />
            }
            label="Female"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selected === "male"}
                onChange={handleChange}
                name="male"
              />
            }
            label="Male"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={selected === "alive"}
                onChange={handleChange}
                name="alive"
              />
            }
            label="Alive"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={selected === "dead"}
                onChange={handleChange}
                name="dead"
              />
            }
            label="Dead"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selected === "human"}
                onChange={handleChange}
                name="human"
              />
            }
            label="Human"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selected === "alien"}
                onChange={handleChange}
                name="alien"
              />
            }
            label="Alien"
          />
        </FormGroup>
      </FormControl>
    </MainContainer>
  );
};

export default CheckboxGroup;
