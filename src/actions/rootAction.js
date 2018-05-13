import {ACTION_TYPES} from '../constants';

export const selectAnimal = (animal) => {
    return {
        type: ACTION_TYPES.ANIMAL_CLICKED,
        payload: animal
    }
}