// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './message.scss';
import FAQ from '../FAQ';

// == Composant
const Message = ({counter}) => (
  <div className={counter ? "message" : "is-hidden"}> 
    {counter ? `La recherche a donné ${counter} résultats.` : ""}
  </div>
);

FAQ.propTypes = {
  counter: PropTypes.string,
};

// == Export
export default Message;
