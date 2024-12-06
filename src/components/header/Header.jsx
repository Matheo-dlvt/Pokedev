import { Link } from "react-router-dom"
import "./Header.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchInput, setSearchInput] = useState(""); // Gère la valeur du champ de recherche
  const navigate = useNavigate(); // Pour la navigation vers la page de recherche

  const handleSubmitSearch = (e) => {
      e.preventDefault();

      // Vérifie que l'input n'est pas vide
      if (searchInput.trim() === "") {
          alert("Veuillez entrer un nom de Pokémon !");
          return;
      }

      // Redirige vers la page de recherche avec le nom du Pokémon
      navigate(`/search/${searchInput.trim()}`);
  };

  return (
    <header>
      <div className="header-title-container">
        <img className="header-logo" src="src/assets/pokeball.png"/>
        <h1 className="header-title">Pokedev</h1>
      </div>
      <nav className="header-navbar">
        <ul>
            <li><Link to={"/"}>Accueil</Link></li>
            <li><Link to={"/pokemons"}>Pokemons</Link></li>
            <li><Link to={"/types"}>Types</Link></li>
            <li><Link to={"/random-pokemon"}>Pokemon aléatoire</Link></li>
        </ul>
      </nav>
      <form method="get" onSubmit={handleSubmitSearch} className="header-searchbar-form">
        <input 
          type="search" 
          name="query" 
          placeholder="Rechercher un Pokemon"
          value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="search-input"
        />
        <button type="submit">Rechercher</button>
      </form>
    </header>
  )
}

export default Header