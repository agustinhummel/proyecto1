import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";

const initialState = {
  pokemons: [],
  pokemonsSearched: [],
  pokemonInPage: [],
  countPokemones: 0,
}

export const fetchPokemonsWhitDetails = createAsyncThunk(
  'data/fetchPokemonsWhitDetails',
  async (_, { dispatch }) => {
    const pokemonsRes = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    let pokemones = []
    pokemonsDetailed.map((elem) => {
      let { name, id, types, stats, weight, base_experience, sprites: { other: { dream_world: front_default } } } = elem;

      pokemones.push({ name, id, types, image: front_default, stats, weight, base_experience });
    })
    dispatch(setPokemons(pokemones));
    let countPokes = pokemones.length
    dispatch(setCountPokemones(countPokes))
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => {
          return pokemon.id === action.payload.pokemonId;
        }
      )
      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
    setSearch: (state, action) => {
      const imputValue = action.payload.toLocaleLowerCase();
      if (action.payload.length > 1) {
        const result = state.pokemons.filter(
          (pokemon) => {
            return pokemon.name.includes(imputValue)
          }
        )
        state.pokemonsSearched = result
      } else {
        state.pokemonsSearched = []
      }
    },
    setPokeminInPage: (state, action) => {
      let onlyPokemonInPage = action.payload.pokemons.slice(action.payload.paginationValues.offset, action.payload.paginationValues.limit)
      state.pokemonInPage = onlyPokemonInPage
    },
    setCountPokemones: (state, action) => {
      state.countPokemones = action.payload
    },
  },
});

export const { setFavorite, setPokemons, setSearch, setPokeminInPage, setCountPokemones } = dataSlice.actions;

export default dataSlice.reducer;
