import {ACTION_TYPES} from '../constants';

export const selectAnimal = (animal) => {
    return {
        type: ACTION_TYPES.ANIMAL_CLICKED,
        payload: animal
    }
}

export const getAnimals = (animals) => {
    return {
        type: ACTION_TYPES.GET_ANIMALS,
        payload: animals
    }
}