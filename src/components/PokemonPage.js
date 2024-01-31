import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemon] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(data => setPokemon(data))
  }, [])

  function handleAddPokemon(newPokemon){
    setPokemon([...pokemons, newPokemon]);
  }

  const displayPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search search={search} onChangeSearch={setSearch}/>
      <br />
      <PokemonCollection pokemons={displayPokemons}/>
    </Container>
  );
}

export default PokemonPage;
