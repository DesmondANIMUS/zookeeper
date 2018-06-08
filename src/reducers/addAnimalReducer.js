import {ACTION_TYPES} from '../constants';

export default (state = null, action) => {
    switch(action.type) {
        case ACTION_TYPES.ADD_ANIMAL:
            return action.payload;
        default:
            return state;        
    }
}