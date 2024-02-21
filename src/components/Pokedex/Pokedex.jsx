import './Pokedex.scss';

function Pokedex({ data, setPokemonId }) {
  return (
    <div className="wrapper">
      <div className="pokedex-container">
        {data.map((pokemon) => (
          <div
            className="pokedex-container__card"
            key={pokemon.id}
            onClick={() => setPokemonId(pokemon.id)}
            onKeyDown={() => setPokemonId(pokemon.id)}
            role="presentation"
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="pokedex-container__card-avatar"
            />
            <h3>{`${pokemon.name} (ID : ${pokemon.id})`}</h3>
            <h4>Type(s) : </h4>
            <ul>
              {pokemon.apiTypes.map((type) => (
                <li key={type.name}>{type.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
