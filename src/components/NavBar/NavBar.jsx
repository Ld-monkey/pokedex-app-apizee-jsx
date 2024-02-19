import './NavBar.scss';
import PokemonBanner from '../assets/pokemon-title-left.png';
import PokedexImage from '../assets/icon-pokedex-rigth.png';

function NavBar() {
  return (
    <header className="header">
      <nav className="header__navbar">
        <img
          src={PokemonBanner}
          alt="The official pokémon banner"
          className="header__navbar-banner"
        />
        <div className="header__navbar-searchbar">
          <input
            type="text"
            value="test"
            placeholder="Choisir un pokemon !"
            className="header__navbar-searchbar-input"
          />
          <button type="button" className="header__navbar-searchbar-button">
            Chercher
          </button>
        </div>
        <img src={PokedexImage} alt="test" className="header__navbar-image-pokedex"/>
      </nav>
    </header>
  );
}

export default NavBar;
