import { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Pokedex from '../Pokedex/Pokedex';
import './App.scss';

function App() {
  const [pokedex, setPokedex] = useState();

  useEffect(() => {

  }, [])

  return (
    <main>
      <NavBar />
      <Pokedex />
    </main>
  );
}

export default App;
