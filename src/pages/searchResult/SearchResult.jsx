import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./SearchResult.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const SearchResultPage = () => {
    const { pokemonName } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            if (!pokemonName) return;

            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonName}`);
                if (!response.ok) {
                    throw new Error("Pokémon introuvable");
                }
                const data = await response.json();
                setPokemon(data);
            } catch (error) {
                setError(error.message);
                setPokemon(null);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [pokemonName]);

    return (
        <>
        <Header />
        <div className="search-results">
            <h1>Résultats de recherche</h1>
            {loading && <p>Chargement...</p>}
            {error && <p className="error">{error}</p>}
            {pokemon && (
                <Link to={`/pokemon/${pokemon.id}`} >
                <div className="pokemon-card">
                    <p>{pokemon.name}</p>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <div className="pokemon-types">
                        {pokemon.apiTypes.map((type) => (
                            <span key={type.name} className="pokemon-type">
                                {type.name}
                            </span>
                        ))}
                    </div>
                </div>
                </Link>
            )}
        </div>
        <Footer />
        </>
    );
};

export default SearchResultPage;
