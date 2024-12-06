import "./AllPokemonCard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllPokemonByGeneration = () => {
    const [allGenerations, setAllGenerations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllGenerations = async () => {
            try {
                const generations = [];

                // Boucle pour récupérer les Pokémon de chaque génération
                for (let gen = 1; gen <= 8; gen++) {
                    const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/generation/${gen}`);
                    const data = await response.json();
                    generations.push({ generation: gen, pokemons: data });
                }

                setAllGenerations(generations);
            } catch (error) {
                console.error("Erreur lors de la récupération des Pokémon :", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllGenerations();
    }, []);

    return (
        <main className="all-generations-container">
            {loading ? (
                <p>Chargement des Pokémon par génération...</p>
            ) : (
                allGenerations.map((generationData) =>
                    generationData.pokemons.length > 0 ? (
                        <section key={generationData.generation} className="generation-section">
                            <h2 className="generation-title">Génération {generationData.generation}</h2>
                            <div className="card-container">
                                {generationData.pokemons.map((pokemon) => (
                                    <article key={pokemon.id} className="pokemon-card">
                                        <Link to={`/pokemon/${pokemon.id}`} className="pokemon-link">
                                            <p>{pokemon.name}</p>
                                            <img src={pokemon.image} alt={pokemon.name} />
                                            <div className="pokemon-types">
                                                {pokemon.apiTypes.map((type) => (
                                                    <span key={type.name} className="pokemon-type">
                                                        {type.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ) : null
                )
            )}
        </main>
    );
};

export default AllPokemonByGeneration;
