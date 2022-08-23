import React, { useContext } from "react";
import { PokemonListContext } from "../contexts/PokemonListContext";
import PokemonList from "./PokemonList";

const Homepage = () => {
  const pokemons = useContext(PokemonListContext);

  return (
    <div className="pb-5">
      <h1 className="text-center mt-5">
        <b className="pokemon-list">POKEMON LIST</b>
      </h1>

      <div className="row">
        {pokemons.map((pokemon) => {
          return <PokemonList key={pokemon.name} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
