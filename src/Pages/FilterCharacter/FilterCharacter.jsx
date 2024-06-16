import React, { useContext, useEffect } from "react";
import { CharacterContext } from "../../Context/CharactersContext";
import { useParams } from "react-router-dom";
import { WrapperConatiner, Title, MainContainer } from "./Styles";
import Card from "../../components/Card/Card";
import ButtonBack from "../../components/ButtonBack/ButtonBack";

const FilterCharacter = () => {
  const { charactersByFilter, getCharactersByFilter } = useContext(CharacterContext);
  const { selected } = useParams();

  const fetchAllCharacterByFilter = async (selected) => {
    await getCharactersByFilter(selected);
  };

  useEffect(() => {
    fetchAllCharacterByFilter (selected);
  }, [selected]);

  return (
    <WrapperConatiner>
      <ButtonBack />
      <Title>{`Characters ${selected}`}</Title>
      <MainContainer>
        {charactersByFilter.map((item) => (
          <Card key={item.id} character={item} />
        ))}
      </MainContainer>
    </WrapperConatiner>
  );
};

export default FilterCharacter;
