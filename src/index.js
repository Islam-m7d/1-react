import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 import Home from './App';
 import Hom from './pages/home';
import One from './pages/one';
import Two from './pages/two';
import Three from './pages/three';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/> ,
    errorElement: <h1 className="bg-danger text-light ps-5">SORRY......................</h1>,

  },
  {
    path: "home",
    element:<Hom/> ,
    errorElement: <h1 className="bg-danger text-light ps-5">SORRY......................</h1>,

  },
  {
    path: "/one",
    element:<One/> ,
    errorElement: <h1 className="bg-danger text-light ps-5">SORRY......................</h1>,

  },
  {
    path: "/two",
    element:<Two/> ,
    errorElement: <h1 className="bg-danger text-light ps-5">SORRY......................</h1>,

  },
  {
    path: "/three",
    element:<Three/> ,
    errorElement: <h1 className="bg-danger text-light ps-5">SORRY......................</h1>,

  }
]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


