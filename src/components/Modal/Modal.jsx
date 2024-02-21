import { useEffect, useState } from 'react';
import './Modal.scss';
import axios from 'axios';

function StatisticalContent({ informations }) {
  const { stats } = informations;

  return (
    <>
      {Object.entries(stats).map(([key, value]) => (
        <ul key={key}>
          {key} : {value}
        </ul>
      ))}
    </>
  );
}

function Modal({ idPokemon, toggleModal }) {
  const [pokemonData, setPokemonData] = useState(null);

  async function fetchOnlyOnePokemonData() {
    try {
      const response = await axios.get(
        `https://pokebuildapi.fr/api/v1/pokemon/${idPokemon}`,
      );
      const { data } = response;

      if (data) {
        setPokemonData(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchOnlyOnePokemonData();
  }, [idPokemon]);

  return (
    <div className="modal-container">
      <div className="modal-container__header">
        <h2>{pokemonData?.name}</h2>
        <button
          type="button"
          className="modal-container__header-button"
          onClick={toggleModal}
        >
          x
        </button>
      </div>
      <div className="modal-container__content">
        {pokemonData === null ? (
          <p className="modal-container__content-loading">Loading data ...</p>
        ) : (
          <div className="modal-container__content-stats">
            <h3>Statistiques :</h3>
            <StatisticalContent informations={pokemonData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
