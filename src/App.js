import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BASE_URL } from './constants';
import Character from './components/Character';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`${BASE_URL}`)
    .then(res => {
      setCharacters(res.data)
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Star War's Characters</h1>
      { characters.map(char => {
        return <Character info={char} key={char.name} />
      })}
    </div>
  );
}

export default App;
