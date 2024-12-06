import "./Footer.css"

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>© Copyright {year} Mathéo Delvert. Tous droits réservés.</p>
        </footer>
    )
}

export default Footer