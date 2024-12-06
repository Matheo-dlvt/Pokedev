import React, { useState, useEffect } from "react";
import "./RandomPokemon.css";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

const RandomPokemonPage = () => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchRandomPokemon = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
            const data = await response.json();

            // Sélectionner un Pokémon aléatoire
            const randomIndex = Math.floor(Math.random() * data.length);
            setPokemon(data[randomIndex]);
        } catch (error) {
            console.error("Erreur lors de la récupération du Pokémon :", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomPokemon();
    }, []);

    return (
        <>
        <Header />
        <div className="random-pokemon-page">
            <h1>Pokémon Aléatoire</h1>
            {loading ? (
                <p>Chargement...</p>
            ) : (
                pokemon && (
                    <div className="pokemon-details">
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
                        <div className="pokemon-stats">
                            <h3>Statistiques :</h3>
                            <ul>
                                <li>HP : {pokemon.stats.HP}</li>
                                <li>Attaque : {pokemon.stats.attack}</li>
                                <li>Défense : {pokemon.stats.defense}</li>
                                <li>Attaque Spéciale : {pokemon.stats.special_attack}</li>
                                <li>Défense Spéciale : {pokemon.stats.special_defense}</li>
                                <li>Vitesse : {pokemon.stats.speed}</li>
                            </ul>
                        </div>
                        <div className="pokemon-types">
                            <h3>Types :</h3>
                            {pokemon.apiTypes.map((type) => (
                                <span key={type.name} className="pokemon-type">
                                    {type.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )
            )}
            <button onClick={fetchRandomPokemon} className="random-button">
                Changer de Pokémon
            </button>
        </div>
        <Footer />
        </>
    );
};

export default RandomPokemonPage;
