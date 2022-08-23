import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import PokemonList from "./components/Homepage";
import PokemonDetails from "./components/PokemonDetails";
import { PokemonListContext } from "./contexts/PokemonListContext";
import axios from "axios";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((data) => setPokemons(data.data.results))
      .catch((e) => console.log(e));
  }, []);

  return (
    <PokemonListContext.Provider value={pokemons}>
      <BrowserRouter>
        <Navbar />
        <div className="container app">
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/:name" element={<PokemonDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </PokemonListContext.Provider>
  );
};

export default App;
