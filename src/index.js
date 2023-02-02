import React from 'react';
import ReactDOM from 'react-dom/client';

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
    <Pantalla10 />
  </React.StrictMode>
);