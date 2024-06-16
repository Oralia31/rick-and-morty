import React, { useState } from "react";
import { MainButton, TextFieldContent, WrapperContent } from "./Styles";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";

const SearchButton = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleClick = (value) => {
    if (value.length > 0) {
      navigate("/search", {
        state: value,
      });
    } else {
      navigate("/");
    }
  };

  const handleOnInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <WrapperContent>
      <TextFieldContent
        name="valueSearch"
        value={value}
        onChange={handleOnInputChange}
        placeholder="Buscar personaje por nombre"
      />
      <MainButton onClick={() => handleClick(value)}>
        <SearchOutlinedIcon />
      </MainButton>
    </WrapperContent>
  );
};

export default SearchButton;
