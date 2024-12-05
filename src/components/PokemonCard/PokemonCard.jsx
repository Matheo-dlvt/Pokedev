import "./PokemonCard.css"
import { useState } from "react"

const PokemonCard = () => {
    const [pokemons, setPokemons] = useState([]);

    if (pokemons.length === 0) {
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
        .then((response) => {
        return response.json();
        })
        .then((data) => {
        setPokemons(data);
        });
    }

    return (
        <main>
            {pokemons.length > 0 ? (
                <>
                {pokemons.map((pokemon) => {
                    return (
                    <article key={pokemon.key} className="pokemon-card">
                        <p>{pokemon.name}</p>
                        <img src={pokemon.image} alt={pokemon.name}/>
                    </article>
                    );
                })}
                </>
            ) : (
                <p>En attente de récupération des données</p>
            )}
        </main>
    )
}

export default PokemonCard