import React, { useContext } from "react";
import { Navbar, Title } from "./Styles";
import SearchButton from "../SearchButton/SearchButton";
import { CharacterContext } from "../../Context/CharactersContext";
import { Outlet } from "react-router-dom";

const Header = () => {
  const { characters } = useContext(CharacterContext);

  return (
    <>
      <Navbar>
        <Title>Rick and Morty</Title>
        <SearchButton />
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;
