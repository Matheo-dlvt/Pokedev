import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
    const { id } = useParams(); // Récupère l'id du Pokémon depuis l'URL
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`);
                const data = await response.json();
                setPokemon(data);
            } catch (error) {
                console.error("Erreur lors de la récupération du Pokémon :", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonDetails();
    }, [id]);

    if (loading) {
        return <p>Chargement des détails du Pokémon...</p>;
    }

    if (!pokemon) {
        return <p>Erreur : Pokémon introuvable</p>;
    }

    return (
        <div className="pokemon-details">
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />

            <section className="pokemon-stats">
                <h2>Statistiques</h2>
                <ul>
                    <li>HP : {pokemon.stats.HP}</li>
                    <li>Attaque : {pokemon.stats.attack}</li>
                    <li>Défense : {pokemon.stats.defense}</li>
                    <li>Attaque Spéciale : {pokemon.stats.special_attack}</li>
                    <li>Défense Spéciale : {pokemon.stats.special_defense}</li>
                    <li>Vitesse : {pokemon.stats.speed}</li>
                </ul>
            </section>

            <section className="pokemon-types">
                <h2>Types</h2>
                {pokemon.apiTypes.map((type) => (
                    <div key={type.name} className="type-card">
                        <p>{type.name}</p>
                        <img src={type.image} alt={type.name} />
                    </div>
                ))}
            </section>

            <section className="pokemon-resistances">
                <h2>Résistances</h2>
                <ul>
                    {pokemon.apiResistances.map((resistance, index) => (
                        <li key={index}>
                            {resistance.name} - {resistance.damage_relation} ({resistance.damage_multiplier}x)
                        </li>
                    ))}
                </ul>
            </section>

            <section className="pokemon-evolution">
                <h2>Évolution</h2>
                {pokemon.apiEvolutions.length > 0 ? (
                    <ul>
                        {pokemon.apiEvolutions.map((evolution) => (
                            <li key={evolution.pokedexId}>{evolution.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Pas d'évolution disponible</p>
                )}
            </section>
        </div>
    );
};

export default PokemonDetails;
