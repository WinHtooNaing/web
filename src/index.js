import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
 
 
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Programming from "./programming/Programming";
import App from "./App";
import Begin from "./wherefile/Begin";
import HTML from "./pages/HTML";
import Css from "./pages/Css";
import Javascript from "./pages/Javascript";
import Reactjs from "./pages/Reactjs";
import Nextjs from "./pages/Nextjs";
import Nodejs from "./pages/Nodejs";
import Expressjs from "./pages/Expressjs";
import PostgreSQL from "./pages/PostgreSQL";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "programming",
    element: (
      <div>
          <Navbar/>
          <Programming/>
      </div>
      
    )
  },
  {
    path : "begin",
    element : (
      <Begin/>
    )
  },
  {
    path : "html",
    element : (
      <HTML/>
    )
  },
  {
    path : "css",
    element : (
      <Css/>
    )
  },
  {
    path : "javascript",
    element : (
      <Javascript/>
    )
  },
  {
    path : "react",
    element : (
      <Reactjs/>
    )
  },
  {
    path : "nextjs",
    element : (
      <Nextjs/>
    )
  },
  {
    path : "nodejs",
    element : (
      <Nodejs/>
    )
  },
  {
    path : "expressjs",
    element : (
      <Expressjs/>
    )
  },
  {
    path : "postgresql",
    element : (
      <PostgreSQL/>
    )
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
