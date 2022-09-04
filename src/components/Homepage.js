import React, { useContext } from "react";
import PokemonList from "./PokemonList";
import PokemonListContext from "../contexts/PokemonListContext";

const Homepage = () => {
  const { pokemons } = useContext(PokemonListContext);

  console.log("POKEMONS", pokemons);

  return (
    <div className="pb-5">
      <h1 className="text-center mt-5">
        <b className="pokemon-list">POKEMONS LIST</b>
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
