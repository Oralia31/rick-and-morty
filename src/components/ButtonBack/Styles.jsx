import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonBackContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
  font-size: 1.3rem;
  font-family: ${(props) => props.theme.cards.font}, sans-serif;
  color: ${(props) => props.theme.colors.grey};
  padding: 0.5rem 1rem;

  @media (max-width: 479px) {
    font-size: 1.2rem;
  }
`;
