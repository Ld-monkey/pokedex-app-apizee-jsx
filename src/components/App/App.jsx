import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import Pokedex from '../Pokedex/Pokedex';
import './App.scss';
import Modal from '../Modal/Modal';
import CloseModal from '../Modal/CloseModal';
import usePageBottom from '../../hooks/usePageBottom';
import Loading from '../Loading/Loading';

function App() {
  const [pokedex, setPokedex] = useState();
  const [countPagination, setCountPagination] = useState(1);
  const [idModal, setIdModal] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const bottomPageRef = useRef();

  const isPageBottom = usePageBottom(bottomPageRef);

  function handleToggleModal() {
    if (idModal) {
      setIdModal(null);
    }
    setToggleModal(false);
  }

  async function fetchPokedexData() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://pokebuildapi.fr/api/v1/pokemon/limit/${countPagination * 10}`,
      );
      if (response.data && response.data.length) {
        setPokedex(response.data);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPokedexData();
  }, [countPagination]);

  useEffect(() => {
    if (isPageBottom) {
      const count = countPagination + 1;
      setCountPagination(count);
    }
  }, [isPageBottom]);

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
      {loading && <Loading />}
      <div ref={bottomPageRef} />
    </div>
  );
}

export default App;
