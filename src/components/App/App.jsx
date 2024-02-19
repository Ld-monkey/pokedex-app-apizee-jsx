import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import Pokedex from '../Pokedex/Pokedex';

function App() {
  const [pokedex, setPokedex] = useState();

  async function fetchPokedexData() {
    try {
      const response = await axios.get(
        'https://pokebuildapi.fr/api/v1/pokemon/limit/10',
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
  }, []);

  return (
    <main>
      <NavBar />
      {pokedex && <Pokedex data={pokedex} />}
    </main>
  );
}

export default App;
