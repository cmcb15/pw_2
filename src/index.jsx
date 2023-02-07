import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPageC from './Presentation/LoginC/LoginPageC';
import LoginPageR from './Presentation/LoginR/LoginPageR';
import MainPageC from './Presentation/MainC/MainPageC';
import Sorpresa from './Presentation/Sorpresa/Sorpresa';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/lpc' element={<LoginPageC/>}/>
        <Route path='/lpr' element={<LoginPageR/>}/>
        <Route path='/mpc' element={<MainPageC/>}/>
        <Route path='/resenia' element={<Sorpresa/>}/>
        <Route path='/platosRegistrados' element={<Pantalla10/>}/>
        <Route path='/carrito' element={<Pantalla7/>}/>
        <Route path='/pedidoR' element={<Pantalla13/>}/>
        <Route path='/registrarPedido' element={<Pantalla16/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);