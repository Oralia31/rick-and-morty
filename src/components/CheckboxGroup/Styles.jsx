import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  padding: 2rem 0;

  & h2 {
    font-family: ${(props) => props.theme.title.font}, sans-serif;
    font-size: 1.6rem;
    text-align: center;
    color: ${(props) => props.theme.colors.grey};
  }

  & .MuiFormGroup-root {
    display: flex;
    flex-direction: unset;
    column-gap: 3rem;

    & .MuiFormControlLabel-label {
      font-family: ${(props) => props.theme.cards.font}, sans-serif;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 479px) {
    padding: 2rem;
    column-gap: 0.5rem;

    & h2 {
      font-size: 1.4rem;
    }

    & .MuiFormGroup-root {
      justify-content: flex-start;
    }

    & .MuiFormControlLabel-root {
      width: 4rem;
      margin: unset;
    }
  }


  @media (min-width: 480px)  and (max-width: 767px){
    padding: 2rem;
    column-gap: 0.5rem;

    & h2 {
      font-size: 1.4rem;
    }

    & .MuiFormGroup-root {
      justify-content: flex-start;
    }

    & .MuiFormControlLabel-root {
      width: 4rem;
      margin: unset;
    }
  }
`;
