import React, { useContext, useState, useEffect } from "react";
import { ListContainer, Subtitle } from "./Styles";
import { CharacterContext } from "../../Context/CharactersContext";
import Loader from "../Loader/Loader";

const List = ({ information }) => {
  const [loading, setLoading] = useState(true);
  const [episode, setEpisode] = useState({});
  const [id, setId] = useState(0);

  const { getEpisodeCharacter } = useContext(CharacterContext);

  const fetchEpisode = async (id) => {
    const data = await getEpisodeCharacter(id);
    setEpisode(data);
    setLoading(false);
  };

  const getIdFromUrl = (information) => {
    const firstPart = information.split("/");
    const secondPart = firstPart.pop();
    const findId = parseInt(secondPart, 10);
    setId(findId);
    return findId;
  };

  useEffect(() => {
    getIdFromUrl(information);
  }, []);

  useEffect(() => {
    if (id > 0) {
      fetchEpisode(id);
    }
  }, [id]);

  return (
    <ListContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Subtitle>{`Episode: ${episode.episode}`}</Subtitle>
          <h4>{`Name: ${episode.name}`}</h4>
          <h5>{`Date: ${episode.air_date}`}</h5>
        </>
      )}
    </ListContainer>
  );
};

export default List;
