import React, { useState, useEffect } from "react";
import "./Types.css";
import { Link } from "react-router-dom";

const RandomPokemonTypes = () => {
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonTypes = async () => {
            try {
                const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
                const data = await response.json();

                // Récupérer tous les types uniques
                const allTypes = data
                    .flatMap((pokemon) => pokemon.apiTypes)
                    .map((type) => ({
                        name: type.name,
                        image: type.image
                    }));

                // Filtrer pour avoir uniquement les types uniques
                const uniqueTypes = Array.from(
                    new Map(allTypes.map((type) => [type.name, type])).values()
                );

                setTypes(uniqueTypes);
            } catch (error) {
                console.error("Erreur lors de la récupération des types :", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonTypes();
    }, []);

    return (
        <section className="types-section">
            {loading ? (
                <p className="loading-message">Chargement des types...</p>
            ) : (
                
                <div className="types-container">
                    {types.map((type) => (
                        <Link to={`/type/${type.name}`}>
                        <article key={type.name} className="type-card">
                            <p className="type-name">{type.name}</p>
                            <img src={type.image} alt={type.name} className="type-image" />
                        </article>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
};

export default RandomPokemonTypes;
