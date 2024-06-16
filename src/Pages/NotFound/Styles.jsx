import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 3rem;

  & h2 {
    font-family: ${(props) => props.theme.title.font}, sans-serif;
    font-size: 2.5rem;
    text-align: center;
    color: ${(props) => props.theme.colors.grey};
  }
`;