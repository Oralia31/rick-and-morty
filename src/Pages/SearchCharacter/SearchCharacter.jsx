import React, { useContext } from "react";
import { CharacterContext } from "../../Context/CharactersContext";
import { useLocation } from "react-router-dom";
import { MainContainer, WrapperConatiner } from "./Styles";
import Card from "../../components/Card/Card";
import NotFound from "../NotFound/NotFound";
import ButtonBack from "../../components/ButtonBack/ButtonBack";

const SearchCharacter = () => {
  const location = useLocation();
  const { characters } = useContext(CharacterContext);

  const filterCharacter = characters.filter((character) =>
    character.name.toUpperCase().includes(location.state.toUpperCase())
  );

  return (
    <WrapperConatiner>
    <ButtonBack/>
      {filterCharacter.length > 0 ? (
        <MainContainer>
          {filterCharacter.map((item) => (
            <Card key={item.id} character={item} />
          ))}
        </MainContainer>
      ) : (
        <NotFound />
      )}
    </WrapperConatiner>
  );
};

export default SearchCharacter;
