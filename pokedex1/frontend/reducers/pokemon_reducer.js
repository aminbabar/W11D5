import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            newState = action.pokemon
            return newState;
        default:
            return state
    }
}


export default pokemonReducer;