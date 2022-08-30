import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const PokemonListContext = createContext();

export const PokemonListProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((data) => setPokemons(data.data.results))
      .catch((e) => console.log(e));
  }, []);

  return (
    <PokemonListContext.Provider value={{ pokemons }}>
      {children}
    </PokemonListContext.Provider>
  );
};

export default PokemonListContext;
