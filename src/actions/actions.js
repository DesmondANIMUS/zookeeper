import axios from 'axios';
import {ACTION_TYPES, URL} from '../constants';

export const selectAnimal = (animal) => {
    return {
        type: ACTION_TYPES.ANIMAL_CLICKED,
        payload: animal
    }
}

export const getAnimals = () => {
    const req = axios.get(URL.GET_ANIMAL_LIST);        
    req.then(res => console.log(res.data));
    req.catch(e => console.log(e));
    return {
        type: ACTION_TYPES.GET_ANIMALS,
        payload: {}
    }
}