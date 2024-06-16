import React, { useContext, useEffect } from "react";
import { CharacterContext } from "../../Context/CharactersContext";
import { useLocation } from "react-router-dom";
import { MainContainer, WrapperConatiner } from "./Styles";
import Card from "../../components/Card/Card";
import NotFound from "../NotFound/NotFound";
import ButtonBack from "../../components/ButtonBack/ButtonBack";

const SearchCharacter = () => {
  const location = useLocation();
  const { charactersByName, getCharactersByName } = useContext(CharacterContext);

  const fetchAllCharacterByName = async (name) => {
    await getCharactersByName(name);
  };

  useEffect(() => {
    fetchAllCharacterByName (location.state);
  }, [location.state]);

  return (
    <WrapperConatiner>
      <ButtonBack />
      {charactersByName.length > 0 ? (
        <MainContainer>
          {charactersByName.map((item) => (
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
