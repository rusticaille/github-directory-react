// == Import npm
import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

// == Import
import './message.scss';
import FAQ from '../FAQ';

// == Composant
const Message = ({counter}) => {

  const MessageRef = useRef(null);

  useEffect(() => {
    MessageRef.current.scrollIntoView();
  }), [];

  return (
    <div className={counter ? "message" : "is-hidden"} ref={MessageRef}> 
      {counter ? `La recherche a donné ${counter} résultats.` : ""}
    </div>
  )
};

FAQ.propTypes = {
  counter: PropTypes.string,
};

// == Export
export default Message;
