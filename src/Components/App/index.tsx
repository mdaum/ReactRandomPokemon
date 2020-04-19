import React from 'react';
import pikachu from '../../resources/pikachu.gif';
import './App.css';
import RandomPokemonGenerator from '../RandomPokemonGenerator';
import { APIResourceList } from 'pokeapi-js-wrapper';

export default class App extends React.Component {
  state = {
    loading: true,
    numPokemon: 151
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Welcome to my Random Pokemon React Project!
          </h1>
          <img src={pikachu} className="App-logo" alt="logo" />
        </header>
        <div className="PokemonViewer">
          {this.state.loading ? 'loading...' : <RandomPokemonGenerator numPokemon={this.state.numPokemon}/>}
        </div>
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

  async componentDidMount() {
    this.setState({ loading: true });
    const pokeApiResponse = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await pokeApiResponse.json() as APIResourceList;
    this.setState({ loading: false, numPokemon: data.count });
  }

  componentDidUpdate() {
    console.log('App just updated');
  }
}
