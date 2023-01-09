import React, { useEffect, useState } from 'react';
import { getPokemonDescription, getPokemonList, getPokemonImageUrl } from './api/PokeUtilis';

function App() {
  const limitPokemons = 120;
  
  const [pokemonList, setPokemonList] = useState([{}]);
  const [currentPokemonId, setCurrentPokemonId] = useState(1);
  const [selectedOption, setSelectedOption] = useState(1);
  const [cardDescription, setCardDescription] = useState('');
  const [imgContent, setImgContent] = useState('');
  
  useEffect(() => {
    const getPokemonsSelect = async() => {
      const data = await getPokemonList(limitPokemons);
      setPokemonList(data);
    } 
    getPokemonsSelect();

    const getPokemonContent = async() => {
      const data = await getPokemonDescription(1);
      setCardDescription(data);
    }
    getPokemonContent();

    const getPokemonImage = async() => {
      const data = await getPokemonImageUrl(1);
      setImgContent(data);
    }
    getPokemonImage();
  }, []);

  const setCardDescriptionById = async(pokemonId) => {
    const pokemon = await getPokemonDescription(pokemonId);
    setCardDescription(pokemon);
  } ;

  const setChange = (pokemonId) => {
    setCurrentPokemonId(pokemonId);
    setSelectedOption(pokemonId);
    setCardDescriptionById(pokemonId);
    setImgContent(async() => {
      setImgContent(await getPokemonImageUrl(pokemonId))
    });
  };

  const handleChange = (event) => {
    const pokemonId = event.target.value;
    setChange(pokemonId);
  };

  const prevPokemon = (event) => {
    const prevPokemon = (currentPokemonId - 1);
    if(prevPokemon > 0) {
      setChange(prevPokemon);
    }
  };

  const nextPokemon = (event) => {
    const nextPokemon = (parseInt(currentPokemonId) + 1);
    if(nextPokemon <= limitPokemons) {
      setChange(nextPokemon);
    }
  };

  return (
    <div className='container'>
      <section>
        <div className='select'>
          <select onChange={handleChange} value={selectedOption}>
            {
              pokemonList.map((pokemon, index) => {
                return (
                  <option key={index} value={index+1}>
                    {pokemon.name}
                  </option>
                )
              })
            }
          </select>
        </div>
        <div className='card'>
          <div className='card-img'>
            <img src={imgContent}/>
          </div>
          <div className='card-description'>
            {cardDescription}
          </div>
        </div>
        <div className='pagination'>
          <button className='btn' onClick={prevPokemon}>Previous</button>
          <button className='btn' onClick={nextPokemon}>Next</button>
        </div>
      </section>
    </div>
  );
}

export default App;
