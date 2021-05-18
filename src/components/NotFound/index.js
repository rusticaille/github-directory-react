// == Import npm
import React from 'react';

// == Import
import './notfound.scss';
import ufo from 'src/assets/ufo.png';

// == Composant
const NotFound = () => (
  <div className="container"> 
    <div>
      <h1>404</h1>
      <p>Are you lost dude ?</p>
    </div>
    <img className="logo-ufo" src={ufo} alt='ufo-404'/>
  </div>
);

// == Export
export default NotFound;
