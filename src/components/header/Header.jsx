import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const handleSubmitSearch = () => {}

  return (
    <header>
      <div className="header-title-container">
        <img className="header-logo" src="src/assets/pokeball.png"/>
        <h1 className="header-title">Pokedev</h1>
      </div>
      <nav className="header-navbar">
        <ul>
            <li><Link to={"/"}>Accueil</Link></li>
            <li><Link to={"/pokemons"}>Pokemons</Link></li>
            <li><Link to={"/types"}>Types</Link></li>
        </ul>
      </nav>
      <form method="get" onSubmit={handleSubmitSearch} className="header-searchbar-form">
        <input type="search" name="query" placeholder="Rechercher un Pokemon"/>
        <button type="submit">Rechercher</button>
      </form>
    </header>
  )
}

export default Header