import axios from 'axios';
import {ACTION_TYPES, URL} from '../constants';

export const selectAnimal = (animal) => {
    return {
        type: ACTION_TYPES.ANIMAL_CLICKED,
        payload: animal
    }
}

export const getAnimals = () => {    
    return async (dispatch) => {
        const {data} = await axios.get(URL.GET_ANIMAL_LIST);
        dispatch({
            type: ACTION_TYPES.GET_ANIMALS,
            payload: data
        })
    }
}