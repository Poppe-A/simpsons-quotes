import logo from './logo.svg';
import './App.css';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';
import React, { useState } from 'react';

const initQuote = {
  quote: 'Eat my shorts',
  character: 'Bart Simpson',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
  characterDirection: 'Right',
};

function App() {
  const [quote, setQuote] = useState(initQuote);
  const getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((data) => {
        console.log(data);
        setQuote(data.data[0]);
        return true;
      });
  };
  return (
    <div className='App'>
      <QuoteCard quote={quote} />
      <button onClick={getQuote}>Get quote</button>
    </div>
  );
}

export default App;
