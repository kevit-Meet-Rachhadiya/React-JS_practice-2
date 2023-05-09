import React from "react";
import Home from "./Component/home";
import "./Component/home.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quiz from "./Component/Quiz";
import Language from "./Component/language";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/quiz", element: <Quiz /> },
    { path: "/language", element: <Language /> },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
