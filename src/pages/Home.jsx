import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import AllPokemonCard from "../components/PokemonCard/AllPokemonCard"

const Home = () => {
    return (
        <>
            <Header />
            <main className="home-container">
                <h1>Home</h1>
                <h3>Bienvenue sur le site de Pokedev !</h3>
                <div className="home-text-container">
                    <p>Sur ce site vous trouverez tous les Pokemons de la base de données de PokeBuild.</p>
                    <p>Vous pouvez également rechercher un Pokemon en utilisant la barre de recherche ci-dessus.</p>
                    <p>Pour voir tous les Pokemons disponibles, cliquez sur le lien "Pokemons" dans la barre de navigation.</p>
                    <p>Pour voir tous les Pokemons triés par Types disponibles, cliquez sur le lien "Types" dans la barre de navigation.</p>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home