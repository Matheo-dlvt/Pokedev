import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Pokemons6 from "../components/PokemonCard/Pokemons6"
import Types3 from "../components/pokemonsTypes/Types3"
import { Link } from "react-router-dom"

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
                <div className="random-pokemons-container">
                    <h3>Voilà quelques pokemons !</h3> <Link to={"/pokemons"}>Cliquez-ici pour voir plus de Pokemons</Link>
                    <Pokemons6 />
                </div>
                <div className="random-types-container">
                    <h3>Voilà quelques types !</h3> <Link to={"/types"}>Cliquez-ici pour voir plus de Types</Link>
                    <Types3 />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home