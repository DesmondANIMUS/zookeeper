import {ACTION_TYPES} from '../constants';

export default (state = null, action) => {
    switch(action.type) {
        case ACTION_TYPES.ANIMAL_HOVERED:
        case ACTION_TYPES.ANIMAL_CLICKED:           
            return action.payload;
        default:
            return state;     
    }   
}