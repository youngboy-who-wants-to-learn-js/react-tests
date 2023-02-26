import React from "react";
import "./App.css";
import { AppRoutes } from "./routes";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};
