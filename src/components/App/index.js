import React, {useState}  from 'react';
import { Switch, Route} from 'react-router-dom';

// == Import
import './app.scss';
import githubLogo from 'src/assets/logo-github.png';

import axios from 'axios';

import SearchHeader from 'src/components/SearchHeader';
import RepoResults from 'src/components/RepoResults';
import Message from 'src/components/Message';
import FAQ from 'src/components/FAQ';
import NotFound from 'src/components/NotFound';
import Nav from 'src/components/Nav';

// == Composant
const App = () => {
  
  const [placeholder, setPlaceholder] = useState("Rechercher");
  const[inputText, setInputText] = useState("");
  const [reposList, setList] = useState([]);
  const[counter, setCounter] = useState("");
  const[pageCounter, setPageCounter] = useState(1);

  const onClickHidePlaceholder = () => {
    setPlaceholder('');
  }

  const manageInputChange = (inputText) => {
    setInputText(inputText);
  }

  const handleInputResult = (event) => {
    event.preventDefault()
    axios.get(`https://api.github.com/search/repositories?q=${inputText}`)
      .then((response) => {
      setCounter(response.data.items.length);
      });
    axios.get(`https://api.github.com/search/repositories?q=${inputText}&sort=stars&order=desc&page=${pageCounter}&per_page=9`)
      .then((response) => {
        setList(response.data.items);
        setPageCounter(pageCounter + 1);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
  <div className="app">
    <img className="logo" src={githubLogo} alt='github-logo'/>
    <Nav/>
    <Switch>
      <Route exact path="/">
        <SearchHeader
          placeholder={placeholder}
          manageOnClick={onClickHidePlaceholder}
          manageInputSubmit={handleInputResult}
          value={inputText}
          onInputChange={manageInputChange}
        />
        <Message
          counter={counter}
        />
        <RepoResults
          repos={reposList}
          handleMoreResults={handleInputResult}
        />
      </Route>
      <Route exact path="/faq">
        <FAQ/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  </div>
  )
};

// == Export
export default App;
