import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  margin: 0 auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

  @media (max-width: 479px) {
    padding: 0 1rem;
  }

  @media (min-width: 480px)  and (max-width: 767px){
    padding: 1rem 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.title.font};
  color: ${(props) => props.theme.colors.grey};
  letter-spacing: 0.3rem;

  @media (max-width: 479px) {
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
  }
`;
