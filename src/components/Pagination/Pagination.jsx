import React, { useContext, useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { WrapperContent } from "./Styles";
import { CharacterContext } from "../../Context/CharactersContext";


const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { getCharacters } = useContext(CharacterContext);

  const fetchAllCharacter = async (page) => {
    await getCharacters(page);
  };

  useEffect(() => {
    fetchAllCharacter(currentPage);
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <WrapperContent>
      <Pagination
        page={currentPage}
        count={42}
        color="secondary"
        onChange={handlePageChange}
      />
    </WrapperContent>
  );
};

export default PaginationComponent;
