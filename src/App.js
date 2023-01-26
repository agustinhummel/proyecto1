import React, { useEffect } from 'react';
import { Col } from 'antd';
import logo from './statics/logo.svg';
import  Searcher  from './components/Searcher';
import  PokemonList  from './components/PokemonList';
import { Pagination } from './components/Pagination';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchPokemonsWhitDetails, setPokeminInPage } from './slices/dataSlice';
import { setLoading } from './slices/uiSlice';
import { usePagination } from './Hooks/usePagination';
import './App.css';

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const searchedPokemons = useSelector((state) => state.data.pokemonsSearched, shallowEqual);
  const pokemonInPage = useSelector((state) => state.data.pokemonInPage, shallowEqual);
  const valueImputSearch = useSelector((state) => state.ui.valueImputSearch);
  const isLoading = useSelector((state) => state.ui.loading);
  const paginationValues = useSelector((state) => state.pagination.pagination);
  const dispatch = useDispatch();
  const props = usePagination();

  useEffect(() => {
    dispatch(setLoading(true))
    dispatch(fetchPokemonsWhitDetails(paginationValues));
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 2000)
  }, [dispatch]);

  useEffect(() => {
    dispatch(setPokeminInPage({ paginationValues, pokemons }));
  }, [paginationValues, pokemons])

    return (
      <div className='App'>
        
        <Col span={4} offset={10}>
          <img src={logo} alt='Pokedux' />
        </Col>
        <Col span={8} offset={8}>
          <Searcher />
          {valueImputSearch.length < 2 && <Pagination {...props} />}
        </Col>
        <PokemonList pokemons={pokemonInPage} searchedPokemons={searchedPokemons} valueImputSearch={valueImputSearch} />
      </div>
    );
}

export default App;

