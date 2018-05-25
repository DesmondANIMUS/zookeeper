import {ACTION_TYPES} from '../constants';

export default (state = null, action) => {
    switch(action.type) {
        case ACTION_TYPES.GET_ANIMALS:                         
            return action.payload;     
        default: 
            return state;        
    }    
}