import { useEffect, useState } from "react";
import { Global } from "../config/Global";
import { CharacterContext } from "./CharactersContext";

const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [charactersByName, setCharactersByName] = useState([]);
  const [charactersByFilter, setCharactersByFilter] = useState([]);

  const getCharacters = async (page) => {
    try {
      const response = await fetch(`${Global.url}/character/?page=${page}`);
      if (!response.ok) {
        console.error(`Error: ${response.status}`);
        return;
      }
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error("Error fetching all characters: ", error);
    }
  };

  const getCharactersByName = async (name) => {
    try {
      const response = await fetch(`${Global.url}/character/?name=${name}`);
      if (!response.ok) {
        console.error(`Error: ${response.status}`);
        return;
      }
      const data = await response.json();
      setCharactersByName(data.results);
    } catch (error) {
      console.error("Error fetching all characters: ", error);
    }
  };

  const getCharactersByFilter = async (value) => {
    try {
      console.log(value);
      let url = "";

      if (value === "female" || value === "male") {
        url = `${Global.url}/character/?gender=${value}`;
      } else if (value === "alive" || value === "dead") {
        url = `${Global.url}/character/?status=${value}`;
      } else if (value === "human" || value === "alien") {
        url = `${Global.url}/character/?species=${value}`;
      } else {
        console.error("Invalid value")
      }

      const response = await fetch(url);
      
      if (!response.ok) {
        console.error(`Error: ${response.status}`);
        return;
      }
      const data = await response.json();
      setCharactersByFilter(data.results);
    } catch (error) {
      console.error("Error fetching all characters: ", error);
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
        charactersByName,
        getCharactersByName,
        charactersByFilter,
        setCharactersByFilter,
        getCharactersByFilter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharactersProvider;
