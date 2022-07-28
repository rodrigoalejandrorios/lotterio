import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouterWithLayout } from "./common";
import { HomePage } from "./pages/home";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterWithLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
