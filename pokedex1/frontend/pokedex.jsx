import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from "../frontend/util/api_util"
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';

import configureStore from './store/store';



document.addEventListener('DOMContentLoaded', () => {


    let store = configureStore()

    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.fetchAllPokemon = fetchAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    window.getState = store.getState;
    window.dispatch = store.dispatch

    const rootEl = document.getElementById('root');
    ReactDOM.render(<h1>PokedexTest</h1>, rootEl);
});