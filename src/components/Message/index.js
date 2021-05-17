// == Import npm
import React from 'react';

// == Import
import './message.scss';

// == Composant
const Message = ({counter}) => (
  <div className={counter ? "message" : "is-hidden"}> 
    {counter ? <p>"La recherche a donné {counter} résultats"</p> : ""}
  </div>
);

// == Export
export default Message;
