import axios from 'axios';
import {ACTION_TYPES, URL, CONFIG} from '../constants';

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
        });
    }
}

export const addAnimal = (animal) => {
    console.log("addAnimal Action: ", animal);
    const params = getParams(animal);
    return async (dispatch) => {
        const {data} = await axios.post(URL.ADD_ANIMAL, params, CONFIG);
        dispatch({
            type: ACTION_TYPES.ADD_ANIMAL,
            payload: data
        });
    }
}

const getParams = (animal) => {
    let params = new URLSearchParams();
    params.append('aname', animal.animal_name);
    params.append('species', animal.species);
    return params;    
}