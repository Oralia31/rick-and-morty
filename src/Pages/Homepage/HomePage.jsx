import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import { MainContainer } from "./Styles";
import { CharacterContext } from "../../Context/CharactersContext";
import CheckboxGroup from "../../components/CheckboxGroup/CheckboxGroup";
import PaginationComponent from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const { characters } = useContext(CharacterContext);

  return (
    <>
      {characters.length > 0 ? (
        <>
          <CheckboxGroup />
          <MainContainer>
            {characters.map((item) => (
              <Card key={item.id} character={item} />
            ))}
          </MainContainer>
          <PaginationComponent />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomePage;
