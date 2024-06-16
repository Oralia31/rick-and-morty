import styled from "styled-components";
import Avatar from "@mui/material/Avatar";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem 8rem;
  row-gap: 2rem;

  & h2 {
    font-family: ${(props) => props.theme.title.font}, sans-serif;
    font-size: 1.6rem;
    text-align: center;
    color: ${(props) => props.theme.colors.grey};
    margin-bottom: 2rem;
  }

  
  @media (max-width: 767px) {
    padding: 2rem;
    row-gap: 1rem;

    & h2 {
      margin: 1rem;
    }
  }
`;

export const InformationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr;
  column-gap: 5rem;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.grey};
  font-family: sans-serif;
  font-size: 1.3rem;

  @media (max-width: 479px) {
    font-size: 1.1rem;
  }
`;
export const Subtitle = styled.h4`
  color: ${(props) => props.theme.colors.rey};
  font-family: ${(props) => props.theme.cards.font}, sans-serif;
  font-size: 1.3rem;

  @media (max-width: 479px) {
    font-size: 1.1rem;
  }
`;

export const SubtitleStatus = styled.h5`
  color: ${(props) => props.theme.colors.grey};
  font-family: ${(props) => props.theme.cards.font}, sans-serif;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  column-gap: 0.3rem;

  &::before {
    content: "";
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.isalive === "Alive"
        ? "#35d12d"
        : props.isalive === "Dead"
        ? "#d02626"
        : "#77787a"};
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 6rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.borders.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.5rem;

  @media (max-width: 479px) {
    height: 4rem;
  }
`;

export const AvatarContainer = styled(Avatar)`
  &.MuiAvatar-root {
    width: 15rem;
    height: 15rem;

    @media (max-width: 479px) {
      width: 10rem;
      height: 10rem;
    }
  }
`;

export const EpisodeContainer = styled.div`
  width: 100%;
  height: auto;
  max-height: 36rem;
  overflow-y: auto;
`;
