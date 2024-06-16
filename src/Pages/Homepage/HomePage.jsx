import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import { MainContainer } from "./Styles";
import { CharacterContext } from "../../Context/CharactersContext";
import CheckboxGroup from "../../components/CheckboxGroup/CheckboxGroup";

const HomePage = () => {
  const { characters } = useContext(CharacterContext);

  return (
    <>
      <CheckboxGroup />
      <MainContainer>
        {characters.map((item) => (
          <Card key={item.id} character={item} />
        ))}
      </MainContainer>
    </>
  );
};

export default HomePage;
