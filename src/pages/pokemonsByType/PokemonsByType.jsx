import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../components/PokemonCard/AllPokemonCard";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

const PokemonByType = () => {
    const { type } = useParams(); // Récupère le type depuis l'URL
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonsByType = async () => {
            try {
                const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`);
                const data = await response.json();
                setPokemons(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des Pokémon :", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonsByType();
    }, [type]);

    return (
        <>
        <Header />
        <main className="type-pokemon-container">
            <h1>Pokémon de type {type}</h1>
            {loading ? (
                <p>Chargement des Pokémon...</p>
            ) : (
                <div className="card-container">
                    {pokemons.map((pokemon) => (
                        <article key={pokemon.id} className="pokemon-card">
                            <p>{pokemon.name}</p>
                            <img src={pokemon.image} alt={pokemon.name} />
                            <div className="pokemon-types">
                                {pokemon.apiTypes.map((type) => (
                                    <span key={type.name} className="pokemon-type">
                                        {type.name}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </main>
        <Footer />
        </>
    );
};

export default PokemonByType;
