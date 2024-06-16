import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 0.1rem solid ${(props) => props.theme.borders.color};
  row-gap: 0.3rem;

  & h4,
  h5 {
    color: ${(props) => props.theme.colors.grey};
    font-size: 1rem;
    font-family: ${(props) => props.theme.cards.font}, sans-serif;
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.grey};
  }

  @media (max-width: 479px) {
    & h4,
    h5 {
      font-size: 1.1rem;
    }
  }
`;

export const Subtitle = styled.h3`
  color: ${(props) => props.theme.colors.grey};
  font-size: 1rem;
  font-family: sans-serif;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.grey};

  @media (max-width: 479px) {
    font-size: 1.1rem;
  }
`;
