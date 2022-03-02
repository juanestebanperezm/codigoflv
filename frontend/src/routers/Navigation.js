import React from "react";
import { Route, Routes } from "react-router-dom";

import ROUTES from "./routes"

export function Navigation() {
  return (
    <Routes>
      {ROUTES.map((route, i) =>(
        <Route key={i} path={route.path} element={<route.component />}> </Route>
      ))}
    </Routes>
  );
}