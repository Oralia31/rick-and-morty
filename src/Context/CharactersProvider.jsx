import { useEffect, useState } from "react";
import { Global } from "../config/Global";
import { CharacterContext } from "./CharactersContext";

const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    try {
      const response = await fetch(`${Global.url}/character`);
      if (!response.ok) {
        console.error(`Error: ${response.status}`);
        return;
      }
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error("Error fetching characters: ", error);
    }
  };

  const getSingleCharacter = async (id) => {
    try {
      const response = await fetch(`${Global.url}/character/${id}`);
      if (!response.ok) {
        console.error(`Error: ${response.status}`);
        return null;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching single character with id ${id}`);
      return null;
    }
  };

  const getEpisodeCharacter = async (id) => {
    try {
      const response = await fetch(`${Global.url}/episode/${id}`);
      if (!response.ok) {
        console.error(`Error: ${response.status}`);
        return null;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching episode with id ${id}`);
      return null;
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        getCharacters,
        getSingleCharacter,
        getEpisodeCharacter,
        
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharactersProvider;
