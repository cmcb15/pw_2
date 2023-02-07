import React from 'react';
import './index.css';
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD:src/index.js

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


const router = createBrowserRouter([  
  {path: "pantalla6",element: <Pantalla6/>},
  {path: "pantalla7",element: <Pantalla7/>},
  {path: "pantalla10",element: <Pantalla10/>,},
  {path: "pantalla13",element: <Pantalla13/>,},
  {path: "pantalla16",element: <Pantalla16/>,},
  {path: 'pantalla8', element: <LoginPage8/>},
  {path: 'main', element: <MainPage8/>},
  {path: 'pantalla4', element: <LoginPage4/>},
  {path: 'main2', element: <MainPage4/>},
  {path: '/', element: <LoginPageC/>},
  {path: 'pantalla3', element: <MainPageC/>},
  {path: 'pantalla9', element: <LoginPageR/>},
  {path: 'sorpresa', element: <Sorpresa/>},
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


=======
import Pantalla7 from './Pantalla7';
import './Styles/pantalla10.css';
import Pantalla10 from './Pantalla10';
import './Styles/pantalla13.css';
import Pantalla13 from './Pantalla13';
import './Styles/pantalla16.css';
import Pantalla16 from './Pantalla16';
{/*
import Pantalla7 from './Pantalla7';
import './Styles/pantalla10.css';
import Pantalla10 from './Pantalla10';
import './Styles/pantalla13.css';
import Pantalla13 from './Pantalla13';
import './Styles/pantalla16.css';
import Pantalla16 from './Pantalla16';
import Pantalla6 from './Pantalla6';*

*/}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*
    <Pantalla6 />
    <Pantalla7 />
    <Pantalla10 />
    <Pantalla13 />
    <Pantalla16 />
    */}
    <BrowserRouter>
      <Routes>
        
        <Route path= '/' element={ <LoginPage8/> }/>
        <Route path= '/main' element={<MainPage8/>}/>
        
        {/*
        <Route path='/' element={ <LoginPage4/> } />
        <Route path='/main' element={ <MainPage4/> } />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
>>>>>>> a2d6da07aa96752e0a0c702058bb26305d4b3542:src/index.jsx


