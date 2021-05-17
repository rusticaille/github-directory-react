// == Import npm
import React, {useState}  from 'react';

// == Import
import './app.scss';
import axios from 'axios';

import SearchHeader from 'src/components/SearchHeader';
import RepoResults from 'src/components/RepoResults';
import Message from 'src/components/Message';

// == Composant
const App = () => {
  
  const [placeholder, setPlaceholder] = useState("Rechercher");
  const[inputText, setInputText] = useState("");
  const [reposList, setList] = useState([]);
  const[counter, setCounter] = useState("")

  const onClickHidePlaceholder = () => {
    setPlaceholder('');
  }

  const manageInputChange = (inputText) => {
    setInputText(inputText);
    console.log(inputText);
  }

  const handleInputResult = (event) => {
    event.preventDefault()
    console.log('submit!');
    console.log(inputText);
    axios.get(`https://api.github.com/search/repositories?q=${inputText}`)
      .then((response) => {
        console.log(response.data.items);
        setList(response.data.items);
        setCounter(response.data.items.length);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
  <div className="app">
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
    />
  </div>
  )
};

// == Export
export default App;
