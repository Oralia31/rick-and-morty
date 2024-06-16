import styled from "styled-components";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

export const LinkContent = styled(Link)`
  text-decoration: none;
`;

export const CardContent = styled(Card)`
  &.MuiPaper-root {
    width: 15rem;
    height: 19rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0%.8;
    row-gap: 0.3rem;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.6) -6px -2px 16px 0px;
    cursor: pointer;

    & h2 {
      font-family: ${(props) => props.theme.title.font}, sans-serif;
      font-size: 1rem;
      text-align: center;
      color: ${(props) => props.theme.colors.grey};
    }

    & img {
      width: 100%;
      //transform: scale(0.8);
      object-fit: fill;
      border: 0.1rem solid ${(props) => props.theme.colors.greyLight};
      //border-radius: 1rem;
    }
  }
`;

export const Status = styled.h3`
  font-family: ${(props) => props.theme.cards.font}, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.3rem;

  &::before {
    content: "";
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.isAlive === "Alive"
        ? "#35d12d"
        : props.isAlive === "Dead"
        ? "#d02626"
        : "#77787a"};
  }
`;

export const CardInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  justify-content: center;
  padding: 0 0.6rem;
  row-gap: 0.3rem;

  & h4,
  h5 {
    font-size: 1rem;
    font-family: ${(props) => props.theme.cards.font}, sans-serif;
  }
`;
