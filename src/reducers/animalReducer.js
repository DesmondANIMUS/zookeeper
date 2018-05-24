import {ACTION_TYPES} from '../constants';

export default (state = null, action) => {

    state = [
        {species: 'ape', name: 'hans'},
        {species: 'cat', name: 'mew'},
        {species: 'rabbit', name: 'bun'},
        {species: 'bit cat', name: 'big mew'},
        {species: 'dragon', name: 'fafnir'},
        {species: 'plane', name: 'apache helicopter'},
        {species: 'chocobo', name: 'chickoo'}
    ];

    switch(action.type) {
        case ACTION_TYPES.GET_ANIMALS: 
            console.log(action);
            return state;            
        default: 
            return state;        
    }
}