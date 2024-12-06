import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AllPokemons from "./pages/AllPokemons.jsx";
import AllPokemonsTypes from "./pages/AllPokemonsTypes.jsx";
import PokemonDetails from "./pages/pokemonDetails/PokemonDetails.jsx";
import PokemonsByType from "./pages/pokemonsByType/PokemonsByType.jsx";
import RandomPokemonPage from "./pages/randomPokemon/RandomPokemon.jsx";
import SearchResult from "./pages/searchResult/SearchResult.jsx";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<AllPokemons />} />
          <Route path="/types" element={<AllPokemonsTypes />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="/type/:type" element={<PokemonsByType />} />
          <Route path="/random-pokemon" element={<RandomPokemonPage />} />
          <Route path="/search/:pokemonName" element={<SearchResult />} />
          {/* <Route path="/fight" element={<FightPage />} />
          <Route path="/search" element={<SearchResultsPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
