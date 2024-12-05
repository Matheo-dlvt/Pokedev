import Header from "../components/header/Header"
import PokemonCard from "../components/PokemonCard/PokemonCard"

const AllPokemons = () => {
    return (
        <>
            <Header />
            <h1>Liste des Pokemons</h1>
            <div className="card-container">
                <PokemonCard />
            </div>
        </>
    )
}

export default AllPokemons