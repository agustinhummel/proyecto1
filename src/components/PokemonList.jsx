import PokemonCard from "./PokemonCard";
import '../style/PokemonList.css';
import { Card } from 'antd';

const pokemonList = ({pokemons,   searchedPokemons,
    valueImputSearch,}) => {
        if (valueImputSearch.length > 1 && searchedPokemons.length < 1) {
            return (
              <div >
                <h1>Nothing found, try searching again.</h1>
              </div>
            );
          }
          if (searchedPokemons.length > 0) {
            return (
              <div className="PokemonList">
                {searchedPokemons.map((pokemon) => {
                  return (
                    <PokemonCard
                        name={pokemon.name}
                        key={pokemon.name}
                        image={pokemon.image.front_default}
                        types={pokemon.types}
                        id={pokemon.id}
                        favorite={pokemon.favorite}
                    />
                  );
                })}
              </div>
            );
          }

    return (
        <div className="PokemonList">
            {pokemons.map((pokemon)=>{
                return (<PokemonCard
                name={pokemon.name}
                key={pokemon.name}
                image={pokemon.image.front_default}
                types={pokemon.types}
                id={pokemon.id}
                favorite={pokemon.favorite}
                />
                );
            })}
        </div>
    )
}

pokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
}

export default pokemonList;