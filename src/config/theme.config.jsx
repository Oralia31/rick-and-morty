import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";


const theme = {
  cards: {
    font: "Questrial"
    
  },
  title :{
    font: "Chakra Petch",
    color: "#fffffff1"
  },
  colors: {
    
    green: "#43b954",
    greenlight: "#3cde77",
    blue: "#00ffff",
    white: "#ffffff",
    grey: "#4e5053",
    greyLight: "#919090f3",
  },
  borders : {
    color: "#d8cece87",
  }
  
};

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #ffffff;
  }
  
  `;

const ThemeConfig = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
