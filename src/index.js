import React from 'react';
import './index.css';
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPageC from './LoginC/LoginPageC';
import LoginPageR from './LoginR/LoginPageR';
import MainPageC from './MainC/MainPageC';
import Sorpresa from './Sorpresa/Sorpresa';
import MainPage8 from './Pantalla8/Main';
import Pantalla6 from './Pantallas/Pantalla6';
import Pantalla7 from './Pantallas/Pantalla7';
import './Styles/Pantalla10.css';
import Pantalla10 from "./Pantallas/Pantalla10";
import './Styles/Pantalla13.css';
import Pantalla13 from './Pantallas/Pantalla13';
import './Styles/Pantalla16.css';
import Pantalla16 from './Pantallas/Pantalla16';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage8 from './Pantalla8/Login/Login8';
import LoginPage4 from './Pantalla4/Login/Login4';
import MainPage4 from './Pantalla4/Main/Main4';
import MenuC from './Pantallas/MenuC';
import MenuR from './Pantallas/MenuR';


const router = createBrowserRouter([ 
  {path: '/', element: <LoginPageC/>},
  {path: 'pantalla3', element: <div><MenuC/><MainPageC/></div>},
  {path: 'pantalla4', element: <div><MenuC/><LoginPage4/></div>},
  {path: 'main2', element: <div><MenuC/><MainPage4/></div>}, 
  {path: "pantalla6",element: <div><MenuC/><Pantalla6/></div>},
  {path: "pantalla7",element: <div><MenuC/><Pantalla7/></div>},
  {path: 'pantalla8', element: <div><MenuC/><LoginPage8/></div>},
  {path: 'main', element: <div><MenuC/><MainPage8/></div>},
  {path: 'pantalla9', element: <LoginPageR/>},
  {path: "pantalla10",element: <div><MenuR/><Pantalla10/></div>},
  {path: "pantalla13",element: <div><MenuR/><Pantalla13/></div>},
  {path: "pantalla16",element: <div><MenuR/><Pantalla16/></div>},
  {path: 'sorpresa', element: <div><MenuC/><Sorpresa/></div>},
]);

createRoot(document.getElementById("root")).render(

  
  <RouterProvider router={router} />
);




