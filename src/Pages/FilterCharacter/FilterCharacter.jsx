import React, { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../../Context/CharactersContext";
import { useParams } from "react-router-dom";
import { WrapperConatiner, Title, MainContainer } from "./Styles";
import Card from "../../components/Card/Card";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import Loader from "../../components/Loader/Loader";

const FilterCharacter = () => {
  const { charactersByFilter, getCharactersByFilter } =
    useContext(CharacterContext);
  const { selected } = useParams();
  const [loading, setLoading] = useState(true);

  const fetchAllCharacterByFilter = async (selected) => {
    await getCharactersByFilter(selected);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    fetchAllCharacterByFilter(selected);
  }, [selected]);

  return (
    <WrapperConatiner>
      <ButtonBack />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Title>{`Characters ${selected}`}</Title>
          <MainContainer>
            {charactersByFilter.map((item) => (
              <Card key={item.id} character={item} />
            ))}
          </MainContainer>
        </>
      )}
    </WrapperConatiner>
  );
};

export default FilterCharacter;
