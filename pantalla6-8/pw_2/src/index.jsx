import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from './Presentation/Login/LoginPage';
import MainPage from './Presentation/MainPage';
{/*import Pantalla7 from './Pantalla7';
import './Styles/pantalla10.css';
import Pantalla10 from './Pantalla10';
import './Styles/pantalla13.css';
import Pantalla13 from './Pantalla13';
import './Styles/pantalla16.css';
import Pantalla16 from './Pantalla16';
import Pantalla6 from './Pantalla6';*/}



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
        <Route path= '/' element={ <LoginPage/> }/>
        <Route path= '/main' element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


