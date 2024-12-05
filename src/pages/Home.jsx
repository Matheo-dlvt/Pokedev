import Header from "../components/header/Header"
import PokemonCard from "../components/PokemonCard/PokemonCard"

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Home</h1>
                <PokemonCard />
            </main>
        </>
    )
}

export default Home