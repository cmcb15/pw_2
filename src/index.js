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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/pw_2/lpc' element={<LoginPageC/>}/>
        <Route path='/pw_2/lpr' element={<LoginPageR/>}/>
        <Route path='/pw_2/mpc' element={<MainPageC/>}/>
        <Route path='/pw_2/resenia' element={<Sorpresa/>}/>
        <Route path='/pw_2/platosRegistrados' element={<Pantalla10/>}/>
        <Route path='/pw_2/carrito' element={<Pantalla7/>}/>
        <Route path='/pw_2/pedidoR' element={<Pantalla13/>}/>
        <Route path='/pw_2/registrarPedido' element={<Pantalla16/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);