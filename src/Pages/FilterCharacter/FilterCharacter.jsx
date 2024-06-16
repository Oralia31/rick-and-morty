import React, { useContext } from "react";
import { CharacterContext } from "../../Context/CharactersContext";
import { useParams } from "react-router-dom";
import { WrapperConatiner, Title, MainContainer } from "./Styles";
import Card from "../../components/Card/Card";
import ButtonBack from "../../components/ButtonBack/ButtonBack";

const FilterCharacter = () => {
  const { characters } = useContext(CharacterContext);
  const { selected } = useParams();

  const filterCharacterBySelected = characters.filter((character) => {
    if (selected) {
      if (selected === "female" || selected === "male") {
        return character.gender.toUpperCase() === selected.toUpperCase();
      }
      if (selected === "alive" || selected === "dead") {
        return character.status.toUpperCase() === selected.toUpperCase();
      }
      if (selected === "human" || selected === "alien") {
        return character.species.toUpperCase() == selected.toUpperCase();
      }
    }
    return false;
  });

  return (
    <WrapperConatiner>
      <ButtonBack />
      <Title>{selected}</Title>
      <MainContainer>
        {filterCharacterBySelected.map((item) => (
          <Card key={item.id} character={item} />
        ))}
      </MainContainer>
    </WrapperConatiner>
  );
};

export default FilterCharacter;
