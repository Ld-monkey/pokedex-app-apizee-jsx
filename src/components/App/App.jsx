import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import Pokedex from '../Pokedex/Pokedex';
import './App.scss';
import Modal from '../Modal/Modal';
import CloseModal from '../Modal/CloseModal';

function App() {
  const [pokedex, setPokedex] = useState();
  const [countPagination, setCountPagination] = useState(1);
  const [idModal, setIdModal] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);

  function handleToggleModal() {
    if (idModal) {
      setIdModal(null);
    }
    setToggleModal(false);
  }

  async function fetchPokedexData() {
    try {
      // 0 à 9.
      const response = await axios.get(
        `https://pokebuildapi.fr/api/v1/pokemon/limit/${countPagination * 10}`,
      );
      if (response.data && response.data.length) {
        setPokedex(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchPokedexData();
  }, [countPagination]);

  return (
    <div className="app">
      <NavBar />
      <main>
        <CloseModal toggleModal={() => handleToggleModal()} />
        {pokedex && <Pokedex data={pokedex} setPokemonId={setIdModal} />}
        {idModal && (
          <Modal idPokemon={idModal} toggleModal={() => handleToggleModal()} />
        )}
      </main>
      <button
        type="button"
        onClick={() => setCountPagination(countPagination + 1)}
        className="button-loading"
      >
        Load more
      </button>
    </div>
  );
}

export default App;
