import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import AllTypes from "../components/pokemonsTypes/AllTypes"
import "../App.css"

const AllPokemonsTypes = () => {
    return (
        <>
            <Header />
            <main className="container">
                <div className="main-container"> 
                    <h1>Liste des types</h1>
                    <AllTypes />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AllPokemonsTypes