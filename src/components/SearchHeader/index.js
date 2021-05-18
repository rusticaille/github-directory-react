// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './searchheader.scss';

// == Composant
const SearchHeader = ({manageOnClick, placeholder, manageInputSubmit, value, onInputChange}) => (
  <div className="search-container">
    <form 
      className='search-form'
      onSubmit={manageInputSubmit}
      >
      <input 
        className='search-input'
        type='text'
        value={value}
        placeholder={placeholder}
        onClick={manageOnClick}
        onChange={(event) => onInputChange(event.target.value)}
      >
      </input>
    </form>
  </div>
);

SearchHeader.propTypes = {
  manageOnClick: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  manageInputSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

// == Export
export default SearchHeader;
