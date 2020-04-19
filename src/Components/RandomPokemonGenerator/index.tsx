import React from 'react';
import { RenderablePokemon } from './RenderablePokemon';
import { Pokemon } from 'pokeapi-js-wrapper';

interface RandomPokemonGeneratorProps {
  numPokemon: number;
}

export default class RandomPokemonGenerator extends React.Component<RandomPokemonGeneratorProps> {

  private numPokemon = 1;

  constructor(props: RandomPokemonGeneratorProps) {
    super(props);
    this.numPokemon = props.numPokemon;
  }

  state = {
    loading: true,
    currentPokemonData: {} as Pokemon
  };

  async componentDidMount () {
    console.log('mounted');
    this.setState({ loading: true });
    await this.fetchRandomPokemon();
  }

  componentDidUpdate() {
    console.log('The component just updated');
  }

  async fetchRandomPokemon () {
    console.log('fetching pokemon');
    const pokeApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * this.numPokemon) + 1}`);
    const data = await pokeApiResponse.json();
    console.log(data);
    this.setState({ loading: false, currentPokemonData: data });
  }

  render() {
    return (
      <section>
        {this.state.loading ? 'loading...'
          : <RenderablePokemon pokemon={this.state.currentPokemonData}/>
        }
      </section>
    );
  }
}
