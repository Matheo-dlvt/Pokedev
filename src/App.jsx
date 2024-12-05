import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AllPokemons from "./pages/AllPokemons.jsx";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<AllPokemons />} />
          {/* <Route path="/types" element={<TypeListPage />} />
          <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
          <Route path="/fight" element={<FightPage />} />
          <Route path="/random" element={<RandomPokemonPage />} />
          <Route path="/search" element={<SearchResultsPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
