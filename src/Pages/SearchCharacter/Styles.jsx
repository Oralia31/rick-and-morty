import styled from "styled-components";

export const WrapperConatiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem 8rem;
  row-gap: 2rem;

  @media (max-width: 1279px) {
    padding: 2rem;
    row-gap: 1rem;
  }
`;
export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
  column-gap: 2rem;
  row-gap: 1rem;

  @media (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
`;

