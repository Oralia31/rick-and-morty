import React from "react";
import { LinkContent, CardContent, CardInformation } from "./Styles";

const Card = ({ character }) => {

  return (
    <LinkContent to={`/rick-and-morty/character/${character.id}`}>
      <CardContent>
        <img src={character.image} />
        <CardInformation>
          <h2>{character.name}</h2>
          <h4>{`${character.species}`}</h4>
        </CardInformation>
      </CardContent>
    </LinkContent>
  );
};

export default Card;