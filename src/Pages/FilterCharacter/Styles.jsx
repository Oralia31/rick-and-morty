import styled from "styled-components";

export const WrapperConatiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 5rem 8rem;
  row-gap: 2rem;

  @media (max-width: 1279px) {
    padding: 2rem;
    row-gap: 1rem;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
  column-gap: 2rem;
  row-gap: 1rem;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Title = styled.h2`
font-family: ${(props) => props.theme.title.font}, sans-serif;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.grey};
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
`;