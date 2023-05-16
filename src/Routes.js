import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

const AppRoute = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          component={(props) =>
            <Dashboard />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoute;
