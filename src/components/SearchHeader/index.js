// == Import npm
import React from 'react';

// == Import
import './searchheader.scss';
import githubLogo from 'src/assets/logo-github.png';

// == Composant
const SearchHeader = ({manageOnClick, placeholder, manageInputSubmit, value, onInputChange}) => (
  <div className="search-container">
    <img className="logo" src={githubLogo} alt='github-logo'/>
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

// == Export
export default SearchHeader;
