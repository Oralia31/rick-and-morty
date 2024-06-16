import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import HomePage from "../Pages/Homepage/HomePage";
import SingleCharacterPage from "../Pages/SingleCharacterPage/SingleCharacterPage";
import SearchCharacter from "../Pages/SearchCharacter/SearchCharacter";
import FilterCharacter from "../Pages/FilterCharacter/FilterCharacter";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/rick-and-morty" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/rick-and-morty/character/:id" element={<SingleCharacterPage />}></Route>
        <Route path="/rick-and-morty/search" element={<SearchCharacter />}></Route>
        <Route path="/rick-and-morty/filter/:selected" element={<FilterCharacter />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
