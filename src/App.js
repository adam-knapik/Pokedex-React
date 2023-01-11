import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonTypesIcons from './data/PokemonTypesIcons';
import Picker from './components/Picker/Picker';
import Card from './components/Card/Card';
import Pagination from './components/Pagination/Pagination';

function App() {
  const baseURL = "https://pokeapi.co/api/v2/pokemon";
    const pokemonsLimit = 904; //904
  
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemon, setPokemon] = useState('1');
    const [selectedOption, setSelectedOption] = useState('');
    const [pokemonData, setPokemonData] = useState([])
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
            setPokemonData(res.data);
            setPokemonType( 
                res.data.types.map((type, index) => {
                    return (
                        <li key={index}>
                            {type.type.name} {PokemonTypesIcons[type.type.name]}  
                        </li>
                    )
                })
            )
        })
    };

    const handleChange = (e) => {
        setChange(e.target.value);
    }

    function getPokemonImageUrl(pokemonId) {
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
    };

    return (
    <div className='container'>
        <Picker 
            onChange = {handleChange}
            value = {selectedOption}
            option = {
                pokemonList.map((poke, index) => {
                    return (
                        <option key={index} value={index+1}>
                            #{index+1} - {poke.name}
                        </option> 
                    )
                }) 
            }
        />

        <Card 
            img = {getPokemonImageUrl(pokemon)}
            title = {pokemonData.name} 
            id = {pokemonData.id}
            type = {pokemonType}
            height = {pokemonData.height}
            weight = {pokemonData.weight}
        /> 

        <Pagination 
            btnPrev= {prevPokemon}
            btnNext= {nextPokemon}
        />
    </div>
    )
}

export default App;