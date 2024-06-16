import React, { useEffect } from "react";
import { dotSpinner } from "ldrs";
import { MainContainer } from "./Styles";

const Loader = () => {
  useEffect(() => {
    dotSpinner.register();
  }, []);

  return (
    <MainContainer>
      <l-dot-spinner size={40} speed={0.9} color="black" />
    </MainContainer>
  );
};

export default Loader;
