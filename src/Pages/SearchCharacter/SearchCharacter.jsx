import React, { useContext } from "react";
import { CharacterContext } from "../../Context/CharactersContext";
import { useLocation } from "react-router-dom";
import { MainContainer } from "./Styles";
import Card from "../../components/Card/Card";
import NotFound from "../NotFound/NotFound";

const SearchCharacter = () => {
  const location = useLocation();
  const { characters } = useContext(CharacterContext);

  const filterCharacter = characters.filter((character) =>
    character.name.toUpperCase().includes(location.state.toUpperCase())
  );

  return (
    <>
      {filterCharacter.length > 0 ? (
        <MainContainer>
          {filterCharacter.map((item) => (
            <Card key={item.id} character={item} />
          ))}
        </MainContainer>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default SearchCharacter;
