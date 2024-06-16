import React from 'react';
import { ButtonBackContainer, StyledLink } from './Styles';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ButtonBack = () => {
  return (
    <ButtonBackContainer>
    <StyledLink  to={"/"}><ArrowBackIcon/>Go Back</StyledLink >
    </ButtonBackContainer>
  )
}

export default ButtonBack