import React from 'react';
import { Pokemon } from 'pokeapi-js-wrapper';

export const RenderablePokemon = ({ pokemon }: { pokemon: Pokemon} ) => {
  const types: string = pokemon.types.map(({ type }) => type.name).join('/');
  return (
    <section>
      <h3>{pokemon.name} (#{pokemon.id})</h3>
      <h6>{types} Type Pokemon</h6>
      <img alt={pokemon.name+'Sprite'} src={pokemon.sprites.front_default} height={200}/>
    </section>
  );
};
