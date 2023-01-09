export async function getPokemonList(limitPokemons) {
    const data = await fetch(
        'https://pokeapi.co/api/v2/pokemon/?offset=0&limit='
        + limitPokemons
    ).then((response) => response.json());
    return data.results;
}
 
export async function getPokemonDescription(pokemonId) {
    const pokemon = await fetch(
        'https://pokeapi.co/api/v2/pokemon-species/'
        + pokemonId
    ).then((response) => response.json());
 
    return pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, ' ');
}

export async function getPokemonImageUrl(pokemonId) {
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonId + '.png';
}