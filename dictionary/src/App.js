import {useState} from 'react';
import './App.css';
import Dictionary from './Dictionary'

const Word = () => {
  const [userWord, setWord] = useState('');

  const handleChange = event => {
    setWord(event.target.value);
  }

  const [buttonText, setButtonText] = useState('Search word');

  function handleClick() {

    setButtonText(
      <div>
        <Dictionary userWord={userWord} />
      </div>
    )
  }

  return (
    <div>
      <input
        type="text"
        id="word"
        name="word"
        onChange={handleChange}
        value={userWord}
        />

      <button onClick={handleClick()} id="searchWordBtn">{buttonText}</button>

    </div>
  )
}

function App() {
  return (

    <div>
      {Word()}
    </div>
  
    );
}
  export default App;