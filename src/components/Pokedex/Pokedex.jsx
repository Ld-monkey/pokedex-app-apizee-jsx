import './Pokedex.scss';

function Pokedex({ data }) {
  return (
    <div className="wrapper">
      <div className="pokedex-container">
        {data.map((pokemon) => (
          <div className="pokedex-container__card" key={pokemon.id}>
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="pokedex-container__card-avatar"
            />
            <h3>{`${pokemon.name} (Id : ${pokemon.id})`}</h3>
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
