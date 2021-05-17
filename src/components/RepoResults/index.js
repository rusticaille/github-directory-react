// == Import npm
import React from 'react';

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

// == Export
export default RepoResults;
