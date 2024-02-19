import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import Pokedex from '../Pokedex/Pokedex';
import './App.scss';

function App() {
  const [pokedex, setPokedex] = useState();
  const [countPagination, setCountPagination] = useState(1);

  function handleLoadMore() {
    // const count = countPagination + 1;
    setCountPagination(countPagination + 1);
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
    <main>
      <NavBar />
      {pokedex && <Pokedex data={pokedex} />}
      <button type="button" onClick={handleLoadMore} className="button-loading">
        Load more
      </button>
    </main>
  );
}

export default App;
