import React, { useContext, useEffect, useState } from "react";
import {
  MainContainer,
  AvatarContainer,
  InformationContainer,
  ItemContainer,
  Title,
  Subtitle,
  SubtitleStatus,
  EpisodeContainer,
} from "./Styles";
import { CharacterContext } from "../../Context/CharactersContext";
import { useParams } from "react-router-dom";
import List from "../../components/List/ListItems";
import Loader from "../../components/Loader/Loader";
import ButtonBack from "../../components/ButtonBack/ButtonBack";

const SingleCharacterPage = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  const { getSingleCharacter } = useContext(CharacterContext);
  const { id } = useParams();

  const fetchCharacter = async (id) => {
    const data = await getSingleCharacter(id);
    setCharacter(data);
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      fetchCharacter(id);
    }
  }, [id]);
  console.log(character);
  return (
    <MainContainer>
      <ButtonBack />

      {loading ? (
        <Loader />
      ) : (
        <>
          <AvatarContainer alt={character.name} src={character.image} />
          <h2>{character.name}</h2>

          <InformationContainer>
            <div>
              <h2>Information</h2>
              <ItemContainer>
                <Title>Gender</Title>
                <Subtitle>{character.gender}</Subtitle>
              </ItemContainer>
              <ItemContainer>
                <Title>Status</Title>
                <SubtitleStatus isalive={character.status}>
                  {character.status}
                </SubtitleStatus>
              </ItemContainer>
              <ItemContainer>
                <Title>Species</Title>
                <Subtitle>{character.species}</Subtitle>
              </ItemContainer>
              <ItemContainer>
                <Title>Types</Title>
                <Subtitle>
                  {character.type.length === 0 ? "Unknow" : character.type}
                </Subtitle>
              </ItemContainer>
              <ItemContainer>
                <Title>Origin</Title>
                <Subtitle>{character.origin.name}</Subtitle>
              </ItemContainer>
              <ItemContainer>
                <Title>Location</Title>
                <Subtitle>{character.location.name}</Subtitle>
              </ItemContainer>
            </div>
            <div>
              <h2>Episode</h2>
              <EpisodeContainer>
                {character.episode.map((item, index) => (
                  <List key={index} information={item} />
                ))}
              </EpisodeContainer>
            </div>
          </InformationContainer>
        </>
      )}
    </MainContainer>
  );
};

export default SingleCharacterPage;
