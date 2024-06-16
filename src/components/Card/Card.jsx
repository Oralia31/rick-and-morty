import React from "react";
import { LinkContent, CardContent, CardInformation, Status } from "./Styles";

const Card = ({ character }) => {
  return (
    <LinkContent to={`/rick-and-morty/character/${character.id}`}>
      <CardContent>
        <img src={character.image} />
        <CardInformation>
          <h2>{character.name}</h2>
          <h3>{`${character.species}`}</h3>
          <Status isalive={character.status}>{character.status}</Status>
        </CardInformation>
      </CardContent>
    </LinkContent>
  );
};

export default Card;
