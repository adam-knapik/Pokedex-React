import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const baseURL = "https://pokeapi.co/api/v2/pokemon";
    const pokemonsLimit = 120;
  
    const [pokemonList, setPokemonList] = useState([{}]);
    const [pokemon, setPokemon] = useState('1');
    const [selectedOption, setSelectedOption] = useState('');
    const [pokemonData, setPokemonData] = useState([{}]);
    const [pokemonType, setPokemonType] = useState('');
    
    useEffect(() => {
        getPokemonList();
        getPokemon(pokemon);
        setSelectedOption(pokemonData.id);
    }, []);

    const getPokemonList = () => {
        axios.get(`${baseURL}/?offset=0&limit=${pokemonsLimit}`).then((res) => {
            setPokemonList(res.data.results);
        }); 
    };

    const getPokemon = (pokemonName) => {
        axios.get(`${baseURL}/${pokemonName}`).then((res) => {
            setPokemonType(res.data.types[0].type.name);
            setPokemonData(res.data);
        })
    };

    const handleChange = (e) => {
        setChange(e.target.value);
    }

    function getPokemonImageUrl(pokemonId) {
        //console.log(pokemonId);
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
    };

    const prevPokemon = () => {
        let prevPokemon = pokemonData.id - 1;
        if(prevPokemon > 0) { 
            setChange(prevPokemon);
        }
    };

    const nextPokemon = () => {
        let nextPokemon = parseInt(pokemonData.id) + 1;
        if(nextPokemon <= pokemonsLimit) {
            setChange(nextPokemon);

        }
    };

    const setChange = (newPokemon) => {
        setPokemon(newPokemon);
        getPokemon(newPokemon);
        setSelectedOption(newPokemon);
    }

    return (
    <div className='container'>
        <div className='select'>
            <select onChange={handleChange} value={selectedOption}>
            {
                pokemonList.map((poke, index) => {
                    return (
                        <option key={index} value={index+1}>
                            {poke.name}
                        </option> 
                    )
                })
            }
            </select>  
        </div>

        <div className='hero'>
            <img async src={getPokemonImageUrl(pokemon)} alt='Pokemon Image'/>
            <h2>{pokemonData.name} #{pokemonData.id}</h2>
                    <ul>
                        <li>Type: {pokemonType}</li>
                        <li>Height: {pokemonData.height}</li>
                        <li>Weight: {pokemonData.weight}</li>
                    </ul>
        </div>    

        <div className='pagination'>
            <button className='btn' onClick={prevPokemon}>Previous</button>
          <button className='btn' onClick={nextPokemon}>Next</button>  
        </div>    
    </div>
    )
}

export default App;
