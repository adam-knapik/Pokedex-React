import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonTypesIcons from './data/PokemonTypesIcons';
import Picker from './components/Picker/Picker';
import Card from './components/Card/Card';
import Pagination from './components/Pagination/Pagination';

function App() {
  const baseURL = "https://pokeapi.co/api/v2";
    const pokemonsLimit = 904; //904
  
    const [pokemonList, setPokemonList] = useState([{}]);
    const [pokemon, setPokemon] = useState('1');
    const [pokemonData, setPokemonData] = useState({});
    const [pokemonType, setPokemonType] = useState('');
    const [pokemonDescritpion, setPokemonDescritpion] = useState('');
    
    useEffect(() => {
        getPokemonList();
        getPokemon(pokemon);
    }, [pokemon]);

    const getPokemonList = () => {
        axios.get(`${baseURL}/pokemon/?offset=0&limit=${pokemonsLimit}`).then((res) => {
            setPokemonList(res.data.results);
        }); 
    };

    const getPokemon = (pokemonId) => {
        axios.get(`${baseURL}/pokemon/${pokemonId}`).then((res) => {
            setPokemonData({ 
                id: res.data.id,
                name: res.data.name,
                height: res.data.height,
                weight: res.data.weight,
                hp: res.data.stats[0].base_stat,
                attack: res.data.stats[1].base_stat,
                defense: res.data.stats[2].base_stat,
                specialAttack: res.data.stats[3].base_stat,
                specialDefense: res.data.stats[4].base_stat,
                speed: res.data.stats[5].base_stat
            });

            setPokemonType( 
                res.data.types.map((type, index) => {
                    return (
                        <li key={index}>
                            {PokemonTypesIcons[type.type.name]} {type.type.name}  
                        </li>
                    )
                })
            );

            getPokemonDescritpion(res.data.name);
        })
    };

    const getPokemonDescritpion = (pokemonName) => {
        axios.get(`${baseURL}/pokemon-species/${pokemonName}`).then((res) => {
            setPokemonDescritpion(res.data.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, ' '));    
        })
    };

    function getPokemonImageUrl(pokemonId) {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
    };


    const handleChange = (e) => {
        setChange(e.target.value);
    }
    
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
    };

    return (
    <div className='container'>
        <Picker 
            onChange = {handleChange}
            value = {pokemon}
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

       <Pagination 
            btnPrev= {prevPokemon}
            btnNext= {nextPokemon}
        />

        <Card 
            img = {getPokemonImageUrl(pokemon)}
            title = {pokemonData.name} 
            id = {pokemonData.id}
            description = {pokemonDescritpion}
            type = {pokemonType}
            height = {pokemonData.height}
            weight = {pokemonData.weight}
            hp = {pokemonData.hp}
            attack = {pokemonData.attack}
            defense = {pokemonData.defense}
            specialAttack = {pokemonData.specialAttack}
            specialDefense = {pokemonData.specialDefense}
            speed = {pokemonData.speed}
        /> 
    </div>
    )
}

export default App;