import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./Navbar";

export const RouterWithLayout: React.FC<{}> = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
