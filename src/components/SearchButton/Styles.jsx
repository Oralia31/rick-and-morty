import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const WrapperContent = styled.div`
  width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2rem;

  @media (max-width: 479px) {
    width: 20rem;
    padding: 1rem 0.3rem;
  }

  @media (min-width: 480px)  and (max-width: 767px){
    padding: unset;
  }
`;

export const TextFieldContent = styled(TextField)`
  & .MuiInputBase-root {
    height: 3.5rem;
    width: 100%;
    border-radius: 2.5rem 0 0 2.5rem;
    border: 0.1rem solid ${(props) => props.theme.borders.color};
    font-size: 1rem;
    color: ${(props) => props.theme.colors.grey};
  }

  &.MuiTextField-root {
    width: 100%;
  }

  @media (max-width: 479px) {
    & .MuiInputBase-root {
      height: 2.5rem;
    }

    & .MuiInputBase-root {
      font-size: 0.8rem;
    }
  }
`;

export const MainButton = styled(Button)`
  &.MuiButtonBase-root {
    height: 3.5rem;
    border-radius: 0 2.5rem 2.5rem 0;
    background-color: ${(props) => props.theme.colors.green};
    border: 0.1rem solid ${(props) => props.theme.borders.color};

    &.MuiButton-root {
      &:hover {
        background-color: ${(props) => props.theme.colors.greenlight};
      }
    }

    & .MuiSvgIcon-root {
      color: ${(props) => props.theme.colors.white};
    }
  }
  @media (max-width: 479px) {
    &.MuiButtonBase-root {
      height: 2.5rem;
    }
  }
`;
