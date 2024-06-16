import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
  padding: 1rem 8rem;
  row-gap: 2rem;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem;
  }

`;
