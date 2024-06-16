import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
  padding: 4rem 8rem;
  column-gap: 2rem;
  row-gap: 1rem;

  @media (max-width: 479px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

 
`;
