import "./AllPokemonCard.css";
import { useState, useEffect } from "react";

const RandomPokemonCard = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch("https://pokebuildapi.fr/api/v1/random/team");
                const data = await response.json();
                setPokemons(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des Pokémon :", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    return (
        <main className="card-container">
            {loading ? (
                <p>En attente de récupération des données...</p>
            ) : (
                pokemons.map((pokemon) => (
                    <article key={pokemon.id} className="pokemon-card">
                        <p>{pokemon.name}</p>
                        <img src={pokemon.image} alt={pokemon.name} />
                    </article>
                ))
            )}
        </main>
    );
};

export default RandomPokemonCard;
