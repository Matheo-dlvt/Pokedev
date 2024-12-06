import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import AllPokemonCard from "../components/PokemonCard/AllPokemonCard"
import "../App.css"

const AllPokemons = () => {
    return (
        <>
            <Header />
            <main className="container">
                <div className="main-container"> 
                    <h1>Liste des Pokemons</h1>
                    <AllPokemonCard />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AllPokemons