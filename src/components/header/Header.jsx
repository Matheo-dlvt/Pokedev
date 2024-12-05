import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const handleSubmitSearch = () => {}

  return (
    <header>
      <div>
        <p></p>
        <div className="header-title-container">
            <img src="src/assets/pokeball.png"/>
            <h1>Pokedev</h1>
            <img src="src/assets/pokeball.png"/>
        </div>
        <form method="get" onSubmit={handleSubmitSearch} className="header-searchbar">
            <input type="search" name="query" placeholder="Rechercher un Pokemon"/>
            <button type="submit">Rechercher</button>
        </form>
      </div>
      
      <nav className="header-navbar">
        <ul>
            <li>
                <Link to={"/"}>Accueil</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header