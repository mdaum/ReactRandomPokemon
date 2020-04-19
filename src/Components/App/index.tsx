import React from 'react';
import pikachu from '../../resources/pikachu.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to my Random Pokemon React Project!
        </h1>
        <img src={pikachu} className="App-logo" alt="logo" />
      </header>
      <footer className="App-footer">
        <a
          className="App-link"
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          This project uses pokeapi
        </a>
        <a
          className="App-link"
          href="https://github.com/mdaum/ReactRandomPokemon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </a>
      </footer>
    </div>
  );
}

export default App;
