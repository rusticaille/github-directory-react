// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './reporesults.scss';

// == Composant
const RepoResults = ({repos}) => (
  <div className="results-container">
    {repos.map((repo) => (
      <div 
        key={repo.id}
        className="result-card"
      >
        <img src={repo.owner.avatar_url} alt='avatar'/>
        <div className="result-desc">
          <a href={repo.owner.html_url}>
            <h2>{repo.name}</h2>
            <span>{repo.full_name}</span>
            <p>{repo.description}</p>
          </a>
        </div>
      </div>
    ))
    }
    
  </div>
);

RepoResults.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      name:PropTypes.string.isRequired,
      full_name: PropTypes.string.isRequired,
      description: PropTypes.string,
      owner: PropTypes.shape({
        html_url:PropTypes.string.isRequired,
    }).isRequired,
    }).isRequired,
  ).isRequired,
}
// == Export
export default RepoResults;
